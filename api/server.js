const express = require('express');
const app = express();
const data = require('./data.json');

// telling to express that notation json must be used
app.use(express.json());

// REST verbs
// GET: get data from a resource
// POST: send data to be processed by a resource
// PUT: update resource data
// DELETE: delete a resource

// URI
// localhost:3000/clients
// resource name: clients

// url with fake users (just for testing purposes)
// https://jsonplaceholder.typicode.com/users

app.get('/clients', function (req, res) {
    res.json(data);
});

app.get('/clients/:id', function (req, res) {
    const { id } = req.params;
    const client = data.find((cli) => cli.id == id);

    // if dont have the client
    // status 204: there is no content (client)
    if (!client) return res.status(204).json();

    // response
    res.json(client);
});

app.post('/clients', function (req, res) {
    const { name, email } = req.body;

    // saving a new client

    // response
    res.json({ name, email });
});

app.put('/clients/:id', function (req, res) {
    const { id } = req.params;
    const client = data.find((cli) => cli.id == id);

    // if dont have the client
    // status 204: there is no content (client)
    if (!client) return res.status(204).json();

    const { name } = req.body;
    client.name = name;

    // response
    res.json(client);
});

app.delete('/clients/:id', function (req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter((client) => client.id != id);

    // response
    res.json(clientsFiltered);
});

// creating the server
app.listen(3000, function () {
    console.log('The server is running!');
});
