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

## local bundler pointing at testnet rpc
ensureEntryPointIsSupported,0.0061
getUserOperationHash,0.1329
preMempoolChecks,0.029800000000000004
    bundle:getWallet,0.0354
    bundle:getNetworkGasPrice&transactionCount,81.533
    bundle:filterOpsAndEstimateGas,119.12339999999999
    bundle:sendHandleOpsTransaction,75.5855
    bundleAll,276.7866
bundle,276.8272
markWalletProcessed,0.0548
waitForTransactionReceipt,1469.8269
parseUserOperationReceipt,1.4315
sendUserOpTotal,1748.6



## Hetzner bunlder pointing at testnet rpc
ensureEntryPointIsSupported,0.011333333333333336
getUserOperationHash,0.9337333333333333
preMempoolChecks,0.14313333333333336
bundle,1.5295333333333336
markWalletProcessed,0.14726666666666668
waitForTransactionReceipt,2019.3468666666668
parseUserOperationReceipt,7.835999999999999
sendUserOpTotal,3559.5333333333333