const express = require('express');
const app = express();
const path = require("path");

app.set('puerto', process.env.PORT || 3001);

app.use("/public", express.static(__dirname + '/public'));

app.set('puerto', process.env.PORT || 3001);

app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

app.get("/", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlInfo);
})

app.get("/register", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlInfo);
})

app.get("/login", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlInfo);
})
