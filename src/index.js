const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    let a = 10;
    let b = 20;
    let c = 30;
    
    res.send(c.toString());
});