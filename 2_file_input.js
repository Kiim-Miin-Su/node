const fs = require("fs");
// 별도의 예외처리 필요;
// var data_1 = fs.readFileSync("example.txt", "utf8");
// console.log(`file_text:\n${data}`);

var data_2 = fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) { // 에러의 종류가 여러가지 있을 수 있잖아? 1 파일 없거나, 2 권한 없음, 3 파일이 아님 등등 그걸 어떻게 구분해서 디버그하지?
        console.error(err);
        return;
    }
    console.log(`file_text:\n${data}`);
});
console.log("program end");