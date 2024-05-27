require('dotenv').config()
const bGround = require('fcc-express-bground');
const express = require('express');
const app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    if(messageStyle === messageStyle.toUpperCase()){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
});


app.use((req, res, next) =>{
    console.log(req.method +  + req.path + " - " + req.ip);
});
module.exports = app;
