const express = require("express");
const app = express();

app.get("/", (req, res) => {
    __dirname
    res.sendFile(__dirname + "/skimWeb" + "/index.html");
});

app.listen(3000, (err) => {
    if (err) return console.log(err);
    
})