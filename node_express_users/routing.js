const express = require("express");
const user_router = require("./routes/auth.js");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", user_router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// ✅ Swagger 연결!
require("./swagger.js")(app);

app.get("/", (req, res) => {
    res.render("main.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
