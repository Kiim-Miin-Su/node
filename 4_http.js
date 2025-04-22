const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === "/") {
        response.writeHead(200, { "content-type": "text/plain" });
        response.end("this is a home page\n");
    } else if (url === "/about") {
        response.writeHead(200, { "content-type": "text/plain" });
        response.end("this is a about page\n");
    } else {
        response.writeHead(404, { "content-type": "text/plain" });
        response.end("page is not found\n");
    }
});

//127.0.0.1;
//localhost;
server.listen(3000, () => {
    console.log("server is running");
});



