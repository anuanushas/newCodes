const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Form</title> </head>');
        res.write(
            "<body> <h1>User Form</h1> <form action='/create-user' method='POST'> <input type='text' name='fname' placeholder='Enter your first name'> <input type='text' name='lname' placeholder='Enter your last name'> <button type='submit'>Send</button> </form> <div> <a href='/users'>Users</a> </div> </body>"
        );
        res.write('</html>');
        res.end();
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Users</title> </head>');
        res.write(
            "<body> <h1>Users</h1> <ul> <li>anu</li> <li>anusha</li> <li>shetty</li> </ul> <div> <a href='/'>Go back</a> </div> </body>"
        );
        res.write('</html>');
        res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userData = new URLSearchParams(parsedBody);
            const firstName = userData.get('fname');
            const lastName = userData.get('lname');
            fs.writeFileSync(path.join(__dirname, 'text.txt'), `First Name: ${firstName}\nLast Name: ${lastName}`);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title>Not Found</title> </head>');
        res.write('<body> <h1>Page not found</h1> <a href="/">Go back</a> </body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
