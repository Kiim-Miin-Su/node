import express, { Router } from "express";

const router = Router();
const port = 3000;
router.use(express.json());

router.use((req, res, next) => {
    console.log("middleware");
    next();
});

router.get("/", (req, res) => {
    res.status(200).send("get: /");
})
router.post("/", (req, res) => {
    res.status(201).send("post: /");
})
router.put("/:id", (req, res) => {
    res.status(201).send("put: /:id");
})
router.delete("/:id", (req, res) => {
    res.status(201).send("delete: /:id");
})

export default router;

