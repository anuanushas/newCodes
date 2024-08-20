// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js server</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html'); // Set the content type for all responses

    if (url === '/' || url === '/home') {
        res.write('<html><head><title>Home</title></head><body><h1>Welcome home</h1></body></html>');
    } else if (url === '/about') {
        res.write('<html><head><title>About</title></head><body><h1>Welcome to About Us page</h1></body></html>');
    } else if (url === '/node') {
        res.write('<html><head><title>Node</title></head><body><h1>Welcome to my Node Js project</h1></body></html>');
    } else {
        res.write('<html><head><title>404</title></head><body><h1>Page not found</h1></body></html>');
    }

    res.end();
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
