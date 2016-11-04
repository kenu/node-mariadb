var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'devuser',
  password : 'okpassokpass',
  database : 'okdevtv'
});

connection.connect();

var post  = {name : 'kenu', email: 'kenu.heo@gmail.com', passwd: 'okpassokpass'};
var query = connection.query('INSERT INTO user SET ?', post, function(err, result) {
  console.log(result);
  connection.end();
});

console.log(query.sql);
