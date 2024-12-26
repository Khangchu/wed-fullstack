const mysql = require('mysql2/promise');
    // const connection = mysql.createConnection({
    //   host:process.env.DB_HOSTNAME,
    //   port:process.env.DB_PORT,
    //   user:process.env.DB_USER,
    //   password:process.env.DB_PASS,
    //   database:process.env.DB_NAME,
    // })
    const connection = mysql.createPool({
      host:process.env.DB_HOSTNAME,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME,
      waitForConnections:true,
      connectionLimit: 10,
      queueLimit: 0
    })
module.exports = connection;