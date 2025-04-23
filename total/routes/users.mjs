import express from "express";

const router = express.Router();

router.use((req, res, next) => {
    console.log("middleware of users");
    next();
});

router.get("/", (req, res) => {
    res.status(200).send("get: /users");
})
router.post("/", (req, res) => {
    res.status(201).send("post: /users sign_up");
})
router.put("/:id", (req, res) => {
    res.status(201).send("put: /users/:id 정보수정")
})
router.delete("/:id", (req, res) => {
    res.status(201).send("delete: /users/:id 회원탈퇴")
})

export default router;