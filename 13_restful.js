const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // 클라이언트 <-> 서버 간 JSON 데이터 전송을 위한 미들웨어


app.get("/posts", (req, res) => {
    res.send("search all of the posts");
})

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    res.send(`post created: ${title}`);
})

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    res.send(`${req.params.id}번 게시글을 조회합니다.`);
})

app.put("/posts/:id", (req, res) => {
    const { title, content } = req.body;
    res.send(`${req.params.id}번 게시글을 수정합니다. (${title})`);
})

app.delete("/posts/:id", (req, res) => {
    res.send(`${req.params.id}번 게시글을 삭제합니다.`);
})

app.listen(port, () => {
    console.log("server is running on port " + port);
})