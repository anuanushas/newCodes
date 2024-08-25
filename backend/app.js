const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the form with GET request
app.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Handle form submission with POST request
app.post('/product', (req, res) => {
    // Log the body to console
    console.log(req.body); // Output: [Object: null prototype] { title: 'hi' }
    console.log(req.body.title); // Output: 'hi'
    res.redirect('/');
});

// Handle requests to root
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
