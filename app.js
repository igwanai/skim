PORT = 3000;

const db = require("./skimWeb/config/db")
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/skimWeb"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/skimWeb" + "/index.html");
});

app.get("/skim_project", (req, res) => {
    const request = req.query.num;
    res.sendFile(__dirname + "/skimWeb" + "/skim_p" +request +".html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/skimWeb" + "/skim_about.html");
});

app.get("/work", (req, res) => {
    res.sendFile(__dirname + "/skimWeb" + "/skim_work.html");
});

//p1) get sensor value
app.get("/sensor", async (req, res) => {
    const response = await db.sensor.getValue();
    res.json(response);
});


app.listen(PORT, (err) => {
    if (err) return console.log(err);
    else console.log("서버 가동");
})

