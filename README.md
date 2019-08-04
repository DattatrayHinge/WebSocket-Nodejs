# WebSocket-Nodejs Server-Client example

## Introduction 
Web Application prior to introduction of web sockets are working on the principle of Request-Response i.e. request form client will be served by in form of response from server at backend. 
As usage and application of web applications increased with time in different fields so the data consumption and rendering of data in real time at client side 
Tradition Request-Response model over HTTP/HTTPS used REST or SOAP apis with inherent shortfalls like 
* Polling frequency 
* Active Client Connection during Poll
* Over head of HTTP/HTTPS header
* Connection and data latency 
is not proving good for such real time web applications

The solution is to use web sockets for such real time web application. With web sockets now server and client can transfer instantly when ever data gets generated at server or client side without any overhead of http/https and polling delay. 

One of the main feature of web socket is bidirectional messaging, i.e. server at backend can send message/data to client at frontend without waiting for request polling from client and typical application of the feature is to send updated data to client whenever new data generated at server side. 

## Demo Example 

This nodejs example application will demonstrate 
* How to use **npm ws** library for application where server send updated data to client on cyclic trigger, this can be easily adapted to application triggered data change messaging  
* Server messaging - In this example server sends local time stamp to client at every 1 second interval and client will display timestamp difference between server and client displaying data latency between server and client 
* Error recovery of client socket – In this example client socket will recovered through socket error and reestablish new client instance ready to connect to server socket

`
Note: *ws* does not work in browsers. For Browser client use native *websocket* library
`
## Install
* Need nodejs and npm install on system 
* Download or clone the repo 

`
$ git clone https://github.com/DattatrayHinge/WebSocket-Nodejs
`

* go to *ws_client* and install required npm packages from *package.json*

`
$ cd WebSocket-Nodejs/ws_client
`

`
$ npm install 
`

* go to *ws_server* and install required npm packages from *package.json*

`
$ cd WebSocket-Nodejs/ws_server
`

`
$ npm install
`

## Run 
### Run Client
* go to *ws_client* and run the client code 

`
$ cd WebSocket-Nodejs/ws_client
`

`
$ npm start 
`

### Run Server 
* go to *ws_server* and run the server code 

`
$ cd WebSocket-Nodejs/ws_client
`

`
$ npm start 
`

## Closing Remarks 
Web Socket with added security layer, has huge potential and widely used in real-time web application some examples are 
* Social Feeds 
* Multiplayer games 
* Collaborative Editing\Coding 
* Clickstream data


## Reference
* https://www.npmjs.com/package/ws
* https://www.npmjs.com/package/wss
* https://www.npmjs.com/package/websocket

