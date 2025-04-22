const http = require("http");
const file_system = require("fs");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        file_system.readFile("test.html", (error, data) => {
            if (error) {
                response.writeHead(500, { "content-type": "text/plain" });
                response.end("Internal Server Error");
            } else {
                response.writeHead(200, { "content-type": "text/html" });
                response.end(data);
            }
        }); // end of readFile();
    } else {
        response.writeHead(404, { "content-type": "text/plain" });
        response.end("404 Not Found");
    }
}); // end of createServer();

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})