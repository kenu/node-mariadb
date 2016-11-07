var mysql = require('mysql');
exports.connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'devuser',
        password: 'okpassokpass',
        database: 'okdevtv'
    });
}
