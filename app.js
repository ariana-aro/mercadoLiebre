const express = require('express');
const app = express();


app.use("/public", express.static(__dirname + '/public'));

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
