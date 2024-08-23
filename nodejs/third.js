const http = require("http"); // This imports the built-in http module in Node.js to create a server.
const fs = require("fs"); // This imports the file system module to read and write files.

const server = http.createServer((req, res) => {
    const url = req.url; // This is the URL the user is trying to access.
    const method = req.method; // This is the HTTP method (GET or POST).

    // Step 1: If the user visits the homepage ("/"), we show the form
    if (url === "/") {
        res.setHeader("Content-Type", "text/html"); // Tells the browser we are sending HTML.

        // This sends the form to the browser so the user can input their first and last name.
        res.write("<html>");
        res.write("<head><title>Simple Form</title></head>");
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

        return res.end(); // Ends the response and sends everything to the browser.
    }

    // Step 2: If the user submits the form (POST request to "/message")
    if (url === "/message" && method === "POST") {
        let body = ""; // Empty string to store incoming form data.

        // Step 3: Listen for data chunks (pieces of the form data).
        req.on("data", (chunk) => {
            body += chunk; // Add each chunk of data to the body variable.
        });

        // Step 4: When all the data is received, this event is triggered.
        req.on("end", () => {
            const formData = new URLSearchParams(body); // Parses the form data.
            const fname = formData.get("fname"); // Gets the first name.
            const lname = formData.get("lname"); // Gets the last name.

            // Step 5: Save the data to a file called "text.txt"
            fs.writeFileSync("text.txt", `First Name: ${fname}, Last Name: ${lname}`);

            // Step 6: Redirect the user back to the homepage.
            res.statusCode = 302; // 302 means "redirect"
            res.setHeader("Location", "/"); // Redirects back to "/"
            return res.end(); // Ends the response.
        });
    }
});

// Step 7: Tell the server to listen on port 3000 (http://localhost:3000)

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});