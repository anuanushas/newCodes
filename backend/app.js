const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// Register routes
app.use('/admin', adminRoutes); // Admin routes prefixed with /admin
app.use(shopRoutes); // Other routes (like shop)

// 404 Page Not Found handling (This should be placed after all route registrations)
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>'); // Simple 404 response
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
