const getHomepage = (req, res) =>{
    res.send('hello world!!!');
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
    getHomepage,getABC,getkhangchu,getlove,getlove1,getlove2,getlove3
}