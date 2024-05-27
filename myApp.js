const bGround = require('fcc-express-bground');
const express = require('express');
const app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    res.json({"message": "Hello json"});
});
module.exports = app;
