var ip = require('ip').address();
const WebSocket = require('ws');

console.log(`Local IP: ${ip}`);

const ws = new WebSocket.Server({ port: 3080 });

// Socket Connection handler
ws.on("connection", function (ws) {

    console.log("Client Connected");
    
    // Socket Close handler
    ws.on('close', function close() {
        console.log('Client Disconnected');
    });
    
    // Data Received hnadler
    ws.on('message', function incoming(data) {
        console.log(`Message Received: ${data}`);
    });
});