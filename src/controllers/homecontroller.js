const { json } = require('express');
const connection = require('../config/database')
let user = []
const getHomepage = (req, res) =>{
// connection.query(
//     ' SELECT *FROM Users u ',
//     function(err,results,fields){
//         user= results;
//       console.log(">>>results=",user);
//       console.log(">>>fields=",fields);
//       console.log(JSON.stringify(user));
//       res.send(JSON.stringify(user));
//     }
//     )
 return res.render('home.ejs')
}
const getABC = (req, res) =>{
    res.render('sample1.ejs')
}
const getkhangchu = (req, res) =>{
    // res.send('<h1> Hello World! </h1>');
   res.render('sample.ejs');
}
const getlove = (req, res) =>{
    // res.send('<h1> Hello World! </h1>');
    res.render('love1.ejs');
}
const getlove1 = (req, res) =>{
    // res.send('<h1> Hello World! </h1>');
    res.render('love2.ejs');
}
const getlove2 = (req, res) =>{
    // res.send('<h1> Hello World! </h1>');
    res.render('love3.ejs');
}
const getlove3 = (req, res) =>{
    // res.send('<h1> Hello World! </h1>');
    res.render('love3.ejs');
}

module.exports={
    getHomepage,getABC,getkhangchu,getlove,getlove1,getlove2,getlove3,
}
