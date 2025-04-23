/**
 * @swagger
 * /users/sign_in:
 *   post:
 *     summary: 사용자 로그인
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
 *     responses:
 *       200:
 *         description: 변경 후 리디렉션 주소 응답
 */
router.put("/", (req, res) => {
    res.json({ success: true, redirect: "/users/change_user" });
});

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: 사용자 삭제
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
 *         description: 삭제 결과 반환
 */
router.delete("/", (req, res) => {
    const { input_user_id, input_user_pw } = req.body;
    res.json({ id: input_user_id, pw: input_user_pw });
});
