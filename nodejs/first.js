// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Console log your name
    console.log('Anusha');

    // Send a response back to the browser 
    res.statusCode = 200;
    res.end('Anusha');
});

// Have the server listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
