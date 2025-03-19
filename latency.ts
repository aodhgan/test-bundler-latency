import { WebSocket } from "ws";
import fetch from "node-fetch";

// Define RPC endpoints
const HTTP_RPC = "https://rpc.testnet.happy.tech/http";
const WS_RPC = "wss://rpc.testnet.happy.tech/ws";

// Define the transaction hash
const TX_HASH = "0xc0c9e87762f8389e9953f6aaca1fdee005515d03b44372d8ba7d6e07022c80e8";

// Number of requests to make
const NUM_REQUESTS = 10;

// JSON-RPC request payload
const payload = {
  jsonrpc: "2.0",
  method: "eth_getTransactionReceipt",
  params: [TX_HASH],
  id: 1,
};

// Function to calculate average, min, and max latencies
function analyzeLatencies(latencies: number[]) {
  const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
  const min = Math.min(...latencies);
  const max = Math.max(...latencies);
  return { avg, min, max };
}

// Function to measure HTTP latency over multiple requests
async function measureHttpLatency() {
  console.log("\n📡 Measuring HTTP RPC latency...");

  const latencies: number[] = [];

  for (let i = 0; i < NUM_REQUESTS; i++) {
    const start = performance.now();
    try {
      const response = await fetch(HTTP_RPC, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      await response.json(); // Ensure response is processed
    } catch (error) {
      console.error(`❌ HTTP request failed at attempt ${i + 1}:`, error);
      continue;
    }
    const end = performance.now();
    const latency = end - start;
    latencies.push(latency);
    console.log(`🔹 HTTP Request ${i + 1}: ${latency.toFixed(2)} ms`);
  }

  const { avg, min, max } = analyzeLatencies(latencies);
  console.log(`📊 HTTP Latency Summary: Avg: ${avg.toFixed(2)} ms, Min: ${min.toFixed(2)} ms, Max: ${max.toFixed(2)} ms`);
}

// Function to measure WebSocket latency over multiple requests
async function measureWsLatency() {
  return new Promise<void>((resolve) => {
    console.log("\n🌐 Measuring WebSocket RPC latency...");

    const latencies: number[] = [];
    const ws = new WebSocket(WS_RPC);

    ws.on("open", () => {
      console.log("✅ WebSocket Connected.");

      let requestCount = 0;

      const sendRequest = () => {
        if (requestCount >= NUM_REQUESTS) {
          ws.close();
          return;
        }

        const start = performance.now();
        ws.send(JSON.stringify(payload));

        ws.once("message", (data) => {
          const end = performance.now();
          const latency = end - start;
          latencies.push(latency);
          console.log(`🔹 WebSocket Request ${requestCount + 1}: ${latency.toFixed(2)} ms`);
          
          requestCount++;
          sendRequest(); // Recursively send next request
        });
      };

      sendRequest();
    });

    ws.on("close", () => {
      console.log("🔌 WebSocket Connection Closed.");

      const { avg, min, max } = analyzeLatencies(latencies);
      console.log(`📊 WebSocket Latency Summary: Avg: ${avg.toFixed(2)} ms, Min: ${min.toFixed(2)} ms, Max: ${max.toFixed(2)} ms`);

      resolve();
    });

    ws.on("error", (err) => {
      console.error("❌ WebSocket error:", err);
      ws.close();
      resolve();
    });
  });
}

// Run tests
(async function runTests() {
  await measureHttpLatency();
  await measureWsLatency();
})();
