const { json } = require('express');
const express = require('express');
const connection = require('../config/database');
const { name } = require('ejs');
const router = express.Router();
const {getAllUser,getAllCreate,getAllShow,getAllUpdate,getdeleteuser}= require('../services/CRUDServices')

const getHomepage = async(req, res) =>{
    let results = await getAllUser();
 return res.render('home.ejs',{listusers: results})
}
const getABC = (req, res) =>{
    res.render('sample1.ejs')
}
const getkhangchu = (req, res) =>{
   res.render('sample.ejs');
}
const getlove = (req, res) =>{
    res.render('love1.ejs');
}
const getlove1 = (req, res) =>{
    res.render('love2.ejs');
}
const getlove2 = (req, res) =>{
    res.render('love3.ejs');
}
const getlove3 = (req, res) =>{
    res.render('love3.ejs');
}
const getcreatUser = async(req, res)=>{
    await getAllCreate(req,res)
    res.redirect('/')
}
const getcreat = (req,res)=>{
    res.render('create.ejs')
}
const getupdate = async (req,res)=>{
    let resupdate = await getAllShow(req,res);
    let usershow = resupdate && resupdate.length > 0 ? resupdate[0]:{};
    // console.log('check:',usershow)
    return  res.render('edit.ejs',{listupdate: usershow})
}
const getUpuser = async (req,res)=>{
   await getAllUpdate(req,res);
   res.redirect('/')
}
const getdelete = async (req,res) => {
await getdeleteuser(req,res);
res.redirect('/')
}

module.exports={
    getHomepage,getABC,getkhangchu,getlove,getlove1,getlove2,getlove3,getcreatUser,getcreat,getupdate,getUpuser,getdelete
}
