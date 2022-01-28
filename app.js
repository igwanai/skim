//const db = require("./skimWeb/config/db")
const express = require("express");
const naddress = __dirname + "/skimWeb";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(naddress))

app.get("/", (req, res) => {
    res.sendFile(naddress + "/index.html");
});

app.get("/skim_project", (req, res) => {
    const request = req.query.num;
    res.sendFile(naddress + "/skim_p" +request +".html");
});

app.get("/about", (req, res) => {
    res.sendFile(naddress + "/skim_about.html");
});

app.get("/work", (req, res) => {
    res.sendFile(naddress + "/skim_work.html");
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

