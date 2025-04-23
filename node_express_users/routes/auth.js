const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();
const port = 3000;

// 정적 파일 제공 (HTML, CSS, JS 등)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 폼 데이터 처리를 위해 추가
app.use(express.static(path.join(__dirname, "public")));

// 라우터
router.get("/sign_up", (req, res) => {
    res.sendFile("/Users/minsukim/Documents/workspaces/node/node_express_users/public/sign_up.html");
});
router.get("/sign_in", (req, res) => {
    res.sendFile("/Users/minsukim/Documents/workspaces/node/node_express_users/views/main.ejs");
})
router.post("/sign_in", (req, res) => {
    const { input_user_id, input_user_pw } = req.body;
    res.render("result.ejs", {
        user_id: input_user_id,
        user_pw: input_user_pw
    })

})
router.put("/", (req, res) => {
    res.json({ success: true, redirect: "/users/change_user" });

})
router.get("/change_user", (req, res) => {
    res.sendFile("/Users/minsukim/Documents/workspaces/node/node_express_users/public/change_user.html");
})
router.delete("/", (req, res) => {
    const { input_user_id, input_user_pw } = req.body;
    res.json({ id: input_user_id, pw: input_user_pw });
})

module.exports = router;
