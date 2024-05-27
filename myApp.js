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
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/now", (req, res, next) => {
      req.time = new Date().toString();
      next();
    }, (req, res) => {
      res.json({time: req.time});
    }
  );


app.get('/:word/echo', (req, res) => {
    const word = req.params.word
    res.json({echo: word});
});

app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({name: `${firstName} ${lastName}`});

});


module.exports = app;
