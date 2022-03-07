const mysql = require('mysql2');

const mysqlConfig = {
    host: "mysql",
    user: "node_server",
    password: "password",
    database: "mysql_db",
    multipleStatements: true
  }

  let con = mysql.createConnection(mysqlConfig);
  con.connect(function(err){
    if (err) console.log('error while connecting')
    console.log('connected to db');
  });

  module.exports ={
    connection : mysql.createConnection(mysqlConfig) 
} 