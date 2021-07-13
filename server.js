const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express here");
})

app.listen(3001, () => {
    console.log("Express running on 3001");
});