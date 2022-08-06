require ('dotenv').config();
const express = require("express");
const app = express();
const mysql = require('mysql');

app.use('view engin','ejs');


const port = process.env.port;
app.listen(port,function(){
    console.log("server stated",port);
});