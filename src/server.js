const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
// config template engine
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs');
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/abc', (req, res) => {
  res.send('Hello World!');
})
app.get('/khangchu', (req, res) => {
 // res.send('<h1> Hello World! </h1>');
 res.render('sample.ejs');
})
app.get('/love', (req, res) => {
  res.render('love1.ejs');
})
app.get('/love1',(req,res)=>{
  res.render('love2.ejs')
})
app.get('/love2',(req,res)=>{
  res.render('love3.ejs')
})
app.get('/love3',(req,res)=>{
  res.render('love4.ejs')
})


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port},${hostname}`);
})