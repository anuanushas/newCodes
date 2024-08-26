const express = require('express');
const router = express.Router();

// Serve the form with GET request
router.get('/add-product', (req, res) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// Handle form submission with POST request
router.post('/add-product', (req, res) => {
    // Log the body to console
    console.log(req.body); // Output: [Object: null prototype] { title: 'hi' }
    console.log(req.body.title); // Output: 'hi'
    res.redirect('/');
});

module.exports = router;
