const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const file_path = path.join(__dirname, 'views', 'index.ejs');
        ejs.renderFile(file_path, { name: "minsu" }, (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("<h1>Internal Server Error</h1>");
            } else {
                res.writeHead(200, { "content-type": "text/html" });
                res.end(data);
            }
        })// end of renderFile();
    } else if (req.url == "/users") {
        const file_path = path.join(__dirname, "views", "users.ejs");
        const users = ["kim", "lee", "park"];
        ejs.renderFile(file_path, { users }, (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("<h1>Internal Server Error</h1>");
            } else {
                res.writeHead(200, { "content-type": "text/html" });
                res.end(data);
            }
        })
    } else if (req.url == "/posts") {
        const file_path = path.join(__dirname, "views", "posts.ejs");
        const posts = [
            { title: "게시글1", content: "내용1" },
            { title: "게시글2", content: "내용2" },
            { title: "게시글3", content: "내용3" }
        ];
        ejs.renderFile(file_path, { posts }, (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("<h1>Internal Server Error</h1>");
            } else {
                res.writeHead(200, { "content-type": "text/html" });
                res.end(data);
            }
        })
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Page not found</h1>");
    }
})// end of createServer();

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})