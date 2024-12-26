const { json } = require('express');
const connection = require('../config/database');
const { name } = require('ejs');
const {getAllUser}= require('../services/CRUDServices')

const getHomepage = async(req, res) =>{
    let results = await getAllUser();
console.log('>>>check row:',results);
 return res.render('home.ejs',{listusers: results})
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
const getcreatUser = async(req, res)=>{
      let email = req.body.myemail;
      let name = req.body.myname;
      let mycity = req.body.mycity
      //let {Email,name,City}= req.body;
//       console.log('email=',email,'name=',name,'city=',mycity);
//         connection.query('INSERT INTO Users (email,name,city) VALUES (?, ?, ?)',
//           [email,name,mycity],
//            function (err,results,fields){
//          console.log(results);
//          res.send('create user ')
//  }
//  )
        console.log('email=',email,'name=',name,'city=',mycity);
    let [results,fields]= await connection.query(
        'INSERT INTO Users (email,name,city) VALUES (?, ?, ?)',[email,name,mycity],)
        console.log('>>>check results:',results);
        console.log('>>>check fields:',fields );
    let [row,colum] = await connection.query(' SELECT *FROM Users u ')    
    console.log('>>>check row:',row);
     return res.render('home.ejs')
}
const getcreat = (req,res)=>{
    res.render('create.ejs')
}
module.exports={
    getHomepage,getABC,getkhangchu,getlove,getlove1,getlove2,getlove3,getcreatUser,getcreat
}
