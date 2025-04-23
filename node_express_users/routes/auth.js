const express = require("express");
const path = require("path");

const router = express.Router();

/**
 * @swagger
 * /users/sign_up:
 *   get:
 *     summary: 회원가입 폼 페이지
 *     description: 회원가입을 위한 HTML 폼 페이지를 반환합니다.
 *     responses:
 *       200:
 *         description: 회원가입 폼 HTML 반환
 */
router.get("/sign_up", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/sign_up.html"));
});

/**
 * @swagger
 * /users/sign_up:
 *   post:
 *     summary: 회원가입 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               input_user_id:
 *                 type: string
 *               input_user_pw:
 *                 type: string
 *               input_user_email:
 *                 type: string
 *               input_user_name:
 *                 type: string
 *               input_user_phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 가입 완료 메시지
 */
router.post("/sign_up", (req, res) => {
    const { input_user_id, input_user_pw, input_user_email, input_user_name, input_user_phone } = req.body;
    console.log("회원가입:", req.body);
    res.send(`가입 완료! ID: ${input_user_id}, Email: ${input_user_email}`);
});

/**
 * @swagger
 * /users/sign_in:
 *   post:
 *     summary: 사용자 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               input_user_id:
 *                 type: string
 *               input_user_pw:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 결과 페이지 렌더링
 */
router.post("/sign_in", (req, res) => {
    const { input_user_id, input_user_pw } = req.body;
    res.render("result.ejs", {
        user_id: input_user_id,
        user_pw: input_user_pw
    });
});

/**
 * @swagger
 * /users:
 *   put:
 *     summary: 사용자 정보 변경
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               input_user_id:
 *                 type: string
 *               input_user_pw:
 *                 type: string
 *     responses:
 *       200:
 *         description: 변경 후 리디렉션 주소 응답
 */
router.put("/", (req, res) => {
    res.json({ success: true, redirect: "/users/change_user" });
});

/**
 * @swagger
 * /users/change_user:
 *   get:
 *     summary: 사용자 변경 완료 페이지
 *     responses:
 *       200:
 *         description: 변경 완료 HTML 페이지 반환
 */
router.get("/change_user", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/change_user.html"));
});

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: 사용자 삭제
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               input_user_id:
 *                 type: string
 *               input_user_pw:
 *                 type: string
 *     responses:
 *       200:
 *         description: 삭제 결과 반환
 */
router.delete("/", (req, res) => {
    const { input_user_id, input_user_pw } = req.body;
    res.json({ id: input_user_id, pw: input_user_pw });
});

module.exports = router;
