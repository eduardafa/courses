// module http
let http = require('http');

// creating a server
// listen indicates the server port
// createServer works with callback functions, here: request and response
http.createServer(function (request, response) {
    response.end('Hello, world! Welcome to my website!');
}).listen(8081);
console.log('The server is active!');
