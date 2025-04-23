// put 요청시 수정하기 위해서는 내 글이어야 하는데 글마다 메타데이터처럼 작성자를 저장시키나?
// python의 login_required 같은 기능이 있나?

const express = require("express");
const path = require("path");
const fs = require("fs");
const { request } = require("http");
const { title } = require("process");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // ejs를 view engine으로 사용
app.set("views", path.join(__dirname, "views")); // views 폴더를 views 디렉토리로 설정
app.use(express.urlencoded({ extended: true })); // POST 요청의 본문을 파싱하기 위한 미들웨어
app.use("/static", express.static("public")); // public 폴더를 static 폴더로 설정


app.get("/", (request, response) => {
    response.send("<h2>this is a homepage</h2>");
});

// http://127.0.0.1:3000/user/<int>
app.get("/user/:id", (request, response) => { // :id는 변수로 사용됨
    response.send(`<h3>requested user id: ${request.params.id}</h3>`);
});

// http://127.0.0.1:3000/search?keyword=<keyword>
// query string을 통해 전달된 파라미터를 가져옴
app.get("/search", (request, response) => {
    // query string을 통해 전달된 파라미터를 가져옴
    const { keyword } = request.query;
    response.send(`<h3>search keyword: ${keyword}</h3>`);
});

app.post("/submit", (request, response) => {
    // key값과 post 요청의 key값이 같아야 함 / html로 보내면 name값이 맞아야 하나? name="name"이렇게
    const { name, age } = request.body;
    console.log(`name: ${name}, age: ${age}`);
})

app.get("/hello", (request, response) => {
    response.render("hello", response.query); // hello.ejs 파일을 렌더링
});

app.get("/posts", (request, response) => {
    const posts = [{ title: "post1", content: "content1" }, { title: "post2", content: "content2" }];
    response.render("posts", { posts }); // posts.ejs 파일을 렌더링
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});