// loading express module
const express = require('express');
const app = express();

// creating new routes
// localhost:8081
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

// localhost:8081/about
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/html/about.htm ');
});

// localhost:8081/blog
app.get('/blog', function (req, res) {
    res.send('Welcome to my blog!');
});

// localhost:8081/ola
app.get('/hello/:position/:name/:color', function (req, res) {
    // checking the parameters
    // res.send(req.params);
    res.send(
        '<h1>' +
            `Hello, ${req.params.name}!` +
            '</h1>\n' +
            '<h2>' +
            `Your position is ${req.params.position}!` +
            '</h2>\n' +
            '<h3>' +
            `Your favorite color is ${req.params.color}.` +
            '</h3>'
    );
    // res.send('<h2>' + `Your position is ${req.params.position}!` + '</h2>');
    // res.send('<h3' + `Your favorite color is ${req.params.color}.` + '</h3>');
});

// opening a server with port 8081
// localhost:8081
app.listen(8081, function () {
    console.log('The server is running on url: http://localhost:8081.');
});
