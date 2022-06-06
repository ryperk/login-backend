var mysql = require('mysql');
var db = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'adira',
    password: 'test123',
    database: 'nod-server'
});


exports.execute = (sql,data) => {
    return new Promise((resolve, reject) => {
        db.query(sql,[data], function (error, results, fields) {
            if (error) reject(error);
            resolve(results)
        });
    })
}


