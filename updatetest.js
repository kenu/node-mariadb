var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'devuser',
  password : 'okpassokpass',
  database : 'okdevtv'
});

connection.connect();

var query = connection.query(
  'UPDATE user SET name = ? WHERE id = ?', 
  ['kenu.heo', 1 ], function(err, result) {
  console.log(result);
  connection.end();
});


console.log(query.sql);
