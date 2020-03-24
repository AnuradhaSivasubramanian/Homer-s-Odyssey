const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '5973',
  database : 'my_db'
});
module.exports  =  connection;