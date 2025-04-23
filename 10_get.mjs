import express from "express";
import fs from "fs";

const app = express();

// app.get("/", (request, response) => {
//     console.log("index is called (GET)");
// })

app.get("/", (request, response) => {
    fs.readFile("log_in_2.html", (error, data) => {
        if (error) {
            response.status(500);
            return response.send("Error loading log_in.html");
        } else {
            response.status(200).set({ "Content-Type": "text/html" });
            response.send(data);
        }
    })
});

app.get("/log_in", (request, response) => {
    console.log("log_in is called (GET)");
    console.log(request.query);
    response.status(200);
});

app.listen(3000, () => { // call back function;
    console.log("Server is running on port 3000");
});
