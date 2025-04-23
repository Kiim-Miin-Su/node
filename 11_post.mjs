import express from "express";
import path from "path";
import fs from "fs";

const app = express();
// post 요청을 처리하기 위해 body-parser 미들웨어를 사용합니다.
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.post("/log_in", (request, response) => {
    const { input_user_id, input_user_pw } = request?.body;
    console.log(`User ID: ${input_user_id}`);
    console.log(`User PW: ${input_user_pw}`);
    response.send(`User ID: ${input_user_id}, User PW: ${input_user_pw}`); // send 로 보내면 정확히 클라이언트의 어디로 가는거야? conslole.log에 찍히는건가? / html로 보내는건가? 그렇다면 무슨 태그로?
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
