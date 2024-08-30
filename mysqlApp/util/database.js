const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
  password: "Anu@developer123",
});

module.exports = pool.promise();