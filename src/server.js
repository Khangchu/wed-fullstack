require("dotenv").config();
const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
// config req.body
app.use(express.json());//For json
app.use(express.urlencoded({extended: true}))// For from data
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection= require('./config/database');
configViewEngine(app);
app.use("/",webRouter);
app.listen(port,hostname, () => {
  console.log(`Example app listening on port: htpp://${hostname}:${port}`);
})