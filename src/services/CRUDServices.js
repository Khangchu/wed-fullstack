const connection = require('../config/database');
const express = require('express');
const getAllUser = async ()=>{
    // let user = []
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
let[results,fields]= await connection.query(` SELECT *FROM Users u `)
return results
}
const getAllCreate = async (req, res)=>
{
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
}
const getAllShow = async(req,res)=>{
    let userid = req.params.id;
    // console.log('>>>check req.params: ', userid)
    let[results,fields] = await connection.query(`SELECT *FROM Users where id=?`,[userid])
return results
}
const getAllUpdate = async (req,res)=>{
    let upid = req.body.ID
    let upemail = req.body.upEmail
    let upname = req.body.upName
    let upcity = req.body.upCity
    console.log('email:',upemail,'name:',upname,'city:',upcity,'id:',upid)
    let [results,fields] = await connection.query(`UPDATE Users SET email =?, name =?, city =? WHERE id =? `,[upemail,upname,upcity,upid])
    console.log('check:',results);
}
const getdeleteuser = async (req,res)=>{
    let deId = req.params.id;
    console.log('check:',deId)
    let [results,fields] =  await connection.query('DELETE FROM Users WHERE id=?',[deId])
}
module.exports = {
    getAllUser,getAllCreate,getAllShow,getAllUpdate,getdeleteuser
}