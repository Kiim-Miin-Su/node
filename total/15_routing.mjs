import express from "express";
import user_router from "./routes/users.mjs";
import post_router from "./routes/posts.mjs";

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/users", user_router);
app.use("/posts", post_router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});