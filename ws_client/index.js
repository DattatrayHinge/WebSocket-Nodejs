var ip = require('ip').address();
const WebSocket = require('ws');
var ws;

console.log(`Local IP: ${ip}`);

var createWebSocketClient = function(){
    try{
        // Connect to localhost 
        ws = new WebSocket('ws://'+ip+':3080');

        // Socket Connect hanlder 
        ws.on('open', function open() {
            console.log('Connection Opened');
        });
            
         // Data received handler 
        ws.on('message', function incoming(data) {
            var obj = JSON.parse(data);
            if(obj.service ==="TIME_UPDATE"){
                console.log(`Received Timestamp Update: Roundtrip Time: ${Date.now() - obj.timestamp} ms`);
            }else {
                console.log(`Unknown Service: ${obj.service}`);
            }
        });

        // Socket Closed handler
        ws.on('close', function close() {

            console.log('Connection Closed');

            // On Close, recreate New Client socket tp connect to server 
            setTimeout(function timeout() {
                createWebSocketClient();
            }, 2000);
        }), 

        // Socket Error Handler
        ws.on('error', function close() {
            console.log('Socket Error!!');

            ws.close();
        });
    }catch (exception){
        console.log(exception);
    }
}

/**
 * Create new instance of client socket 
 */
createWebSocketClient();