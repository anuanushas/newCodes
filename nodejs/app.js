const http = require("http");
const requestHandler = require("./routes");

const server = http.createServer(requestHandler);

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
