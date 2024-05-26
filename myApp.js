const bGround = require('fcc-express-bground');
const express = require('express');
const app = express();

console.log("Hello World");

app.get('/', (req, res) => {
    console.log("Hello Express");
})

module.exports = app;
