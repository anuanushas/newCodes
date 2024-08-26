


const express = require("express");
const bodyParser = require("body-parser");
const loginRoutes = require('./routes/login')
const textRoutes = require('./routes/text')

const app = express();
let message
app.use(bodyParser.urlencoded({ extended: false }));


app.use(loginRoutes)

app.use(textRoutes)

app.use((req, res, next) => {
    res.send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

module.exports = message