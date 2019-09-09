const express = require("express");
const app = express();
const user_router = require("./route/users");
const board_router = require("./route/boards");

app.use(express.json());        
app.use(express.urlencoded({ extended: true}));
app.use("/users", user_route);
app.use("/boards", board_route);

app.listen(3000);

app.get("/", (req, res) => {
        res.send("hello world");
});
 