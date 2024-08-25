const express = require('express');
const app = express();

// First Middleware
app.use((req, res, next) => {
    console.log('First Middleware');
    next();  // Passes control to the next middleware
});

// Second Middleware
app.use((req, res, next) => {
    console.log('Second Middleware');
    // Passes control to the next middleware or route
    next();
});

app.use((req, res) => {
    res.send("hello i am node js")
});

const PORT = 3000;
app.listen(PORT)
