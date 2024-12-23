require('dotenv').config();
const path = require ('path')
const express = require('express');
const app = express();
const port = process.env.PORT;
app.set('views',path.join('./src','views'))
app.set('views engine', 'ejs');
app.use(express.static(path.join('./src','public')))
app.get('/',(req,res)=>{
    res.render('sample1.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port},`);
  })