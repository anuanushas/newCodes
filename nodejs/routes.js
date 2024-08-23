const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Form</title></head>");
        res.write(
            "<body> \
         <form action='/message' method='POST'> \
            <input type='text' name='fname' placeholder='First Name'> \
            <input type='text' name='lname' placeholder='Last Name'> \
            <button type='submit'>Send</button> \
         </form> \
       </body>"
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const formData = new URLSearchParams(body);
            const fname = formData.get("fname");
            const lname = formData.get("lname");
            fs.writeFileSync("text.txt", `First Name: ${fname}, Last Name: ${lname}`);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello Node Js</h1></body>");
    res.write("</html>");
    res.statusCode = 404;
    res.end();
};

// Exporting requestHandler function
module.exports = requestHandler;
