var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'devuser',
  password : 'okpassokpass',
  database : 'okdevtv'
});

connection.connect();

var query = connection.query(
  'DELETE FROM user WHERE id = ?', 
  [ 1 ], function(err, result) {
  console.log(result);
  connection.end();
});

console.log(query.sql);
