var ip = require('ip').address();
const WebSocket = require('ws');

console.log(`Local IP: ${ip}`);

const ws = new WebSocket.Server({ port: 3080 });

// Socket Connection handler
ws.on("connection", function (ws) {

    console.log("Client Connected");
    
    // Client is connected now set cyclic trigger to send time update 
    // service on every 1 sec. 
    setInterval(function timeout() {
        // Check client is alive or not 
        if(ws.readyState===WebSocket.OPEN){
            // Send time update service
            ws.send(JSON.stringify({service:'TIME_UPDATE', 
            timestamp: Date.now()}));
        }
    }, 1000);

    // Socket Close handler
    ws.on('close', function close() {
        console.log('Client Disconnected');
    });
    
    // Data Received handler
    ws.on('message', function incoming(data) {
        console.log(`Message Received: ${data}`);
    });
});