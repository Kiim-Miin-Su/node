const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/api/user") {
        const user = {
            name: "John Doe",
            age: 30,
            job: "Software Developer"
        }
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("<h1>Page not found</h1>")
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})