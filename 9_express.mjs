import express from "express";

const app = express();

app.use((req, res, next) => {
    res.setHeader("node-msg", "Hello node.js!");
    next();
})
app.get("/", (req, res, next) => {
    res.send("<h2>my first express web</h2>");
    next();
})
app.get("/hello", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ message: "Hello World!" });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})