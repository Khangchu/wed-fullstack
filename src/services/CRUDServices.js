const connection = require('../config/database');
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
module.exports = {
    getAllUser
}