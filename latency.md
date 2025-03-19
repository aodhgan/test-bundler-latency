## Get chainId
curl -o /dev/null -s -w "DNS Lookup: %{time_namelookup}s\nTCP Connect: %{time_connect}s\nTLS Handshake: %{time_appconnect}s\nServer Processing (TTFB): %{time_starttransfer}s\nTotal Time: %{time_total}s\n" -X POST https://bundler-staging.happy.tech \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'

DNS Lookup: 0.002310s
TCP Connect: 0.150436s
TLS Handshake: 0.315618s
Server Processing (TTFB): 0.466355s
Total Time: 0.466423s

## Get transaction receipt (via bundler)
curl -o /dev/null -s -w "DNS Lookup: %{time_namelookup}s\nTCP Connect: %{time_connect}s\nTLS Handshake: %{time_appconnect}s\nServer Processing (TTFB): %{time_starttransfer}s\nTotal Time: %{time_total}s\n" -X POST https://bundler-staging.happy.tech \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xc0c9e87762f8389e9953f6aaca1fdee005515d03b44372d8ba7d6e07022c80e8"],"id":1}'

DNS Lookup: 0.001893s
TCP Connect: 0.147130s
TLS Handshake: 0.320063s
Server Processing (TTFB): 0.466183s
Total Time: 0.466271s

## Get transaction receipt (rpc.testnet.happy.tech/http)
curl -o /dev/null -s -w "DNS Lookup: %{time_namelookup}s\nTCP Connect: %{time_connect}s\nTLS Handshake: %{time_appconnect}s\nServer Processing (TTFB): %{time_starttransfer}s\nTotal Time: %{time_total}s\n" -X POST https://rpc.testnet.happy.tech/http \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xc0c9e87762f8389e9953f6aaca1fdee005515d03b44372d8ba7d6e07022c80e8"],"id":1}'

DNS Lookup: 0.002097s
TCP Connect: 0.018177s
TLS Handshake: 0.109051s
Server Processing (TTFB): 0.150619s
Total Time: 0.150972s

Subsequent calls ~0.08 seconds total

## Bundler Timers (testnet, bundler running locally)
ensureEntryPointIsSupported: 0.002ms
getUserOperationHash: 0.125ms
preMempoolChecks: 0.025ms
bundle: 375.686ms
markWalletProcessed: 0.02ms
waitForTransactionReceipt: 1.635s
parseUserOperationReceipt: 1.313ms
sendUserOpTotal: 2.012s

## Http vs websockset
Measuring WebSocket RPC latency...
✅ WebSocket RPC Latency: 141.66 ms
Transaction Receipt (WebSocket): {
  jsonrpc: '2.0',
  id: 1,
  result: {
    blockHash: '0x82563fd211e075f8fe6997cc39d73bdc89510177c79bac141050870b5aecbd87',
    blockNumber: '0x4c54f',
    contractAddress: null,
    cumulativeGasUsed: '0x2fa19',
    effectiveGasPrice: '0xf433c',
    from: '0xa45a98bf696e48d3d57b11352a41e691f2b0f24e',
    gasUsed: '0x24efb',
    l1BaseFeeScalar: '0xa31c2',
    l1BlobBaseFee: '0x1',
    l1BlobBaseFeeScalar: '0x0',
    l1Fee: '0x25bf47cf4',
    l1GasPrice: '0x280454',
    l1GasUsed: '0x1697',
    logs: [ [Object], [Object], [Object] ],
    logsBloom: '0x00000000000000000000080000000000000000000000000000000100000000000008000000000000000000010000000000000000000000000000060000000000000000000000000000000008000000000040000000000000000000000800000000000000020800000000000000000800000000000000000000000010000000000000020000000000000000000000000100000000000000000000000000000000000100000000000000400000002200000000000000000000000002200000000000000002000000400001000000000000000000000000000000000000800020000000000010000000040000080000000000000000000000000000000000000001',
    status: '0x1',
    to: '0x0000000071727de22e5e9d8baf0edac6f37da032',
    transactionHash: '0xc0c9e87762f8389e9953f6aaca1fdee005515d03b44372d8ba7d6e07022c80e8',
    transactionIndex: '0x1',
    type: '0x2'
  }
}
🔌 WebSocket connection closed.
aodhgan@aodhgans-MBP test-bundler-latency % tsx latency.ts

📡 Measuring HTTP RPC latency...
🔹 HTTP Request 1: 190.04 ms
🔹 HTTP Request 2: 77.24 ms
🔹 HTTP Request 3: 102.21 ms
🔹 HTTP Request 4: 64.08 ms
🔹 HTTP Request 5: 67.43 ms
🔹 HTTP Request 6: 50.35 ms
🔹 HTTP Request 7: 60.28 ms
🔹 HTTP Request 8: 53.67 ms
🔹 HTTP Request 9: 34.75 ms
🔹 HTTP Request 10: 43.82 ms
📊 HTTP Latency Summary: Avg: 74.39 ms, Min: 34.75 ms, Max: 190.04 ms

🌐 Measuring WebSocket RPC latency...
✅ WebSocket Connected.
🔹 WebSocket Request 1: 39.47 ms
🔹 WebSocket Request 2: 31.37 ms
🔹 WebSocket Request 3: 32.50 ms
🔹 WebSocket Request 4: 52.86 ms
🔹 WebSocket Request 5: 107.65 ms
🔹 WebSocket Request 6: 41.02 ms
🔹 WebSocket Request 7: 38.58 ms
🔹 WebSocket Request 8: 45.73 ms
🔹 WebSocket Request 9: 29.26 ms
🔹 WebSocket Request 10: 22.16 ms
🔌 WebSocket Connection Closed.
📊 WebSocket Latency Summary: Avg: 44.06 ms, Min: 22.16 ms, Max: 107.65 ms