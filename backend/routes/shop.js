const express = require('express');
const router = express.Router();

// Handle requests to root
router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

module.exports = router;
