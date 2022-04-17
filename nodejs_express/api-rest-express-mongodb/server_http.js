import http from 'http';

const port = 3000;

// using http from node
// routes
const routes = {
    '/': 'NodeJS course',
    '/books': 'You are on the books page',
    '/authors': 'Authors list',
    '/about': 'Information about the project',
};

const server = http.createServer((req, res) => {
    // header
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end(routes[req.url]);
});

// creating local server
server.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
