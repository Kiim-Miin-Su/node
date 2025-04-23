import express from "express";

const app = express();
const port = 3000;

app.route("/posts")
    .get((req, res) => {
        res.status(200).send("search all of the posts");
    })
    .post((req, res) => {
        res.status(201).send("post created");
    })
    .put((req, res) => {
        res.status(201).send("post updated");
    })
    .delete((req, res) => {
        res.status(204).send("post deleted");
    })

app.listen(port, () => {
    console.log("server is running on port " + port);
})