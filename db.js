const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11201111',
    database: 'kelajak'
});

conn.connect((err) => {
    if (err) {
        console.error('MySQL ulanishda xatolik:', err);
    } else {
        console.log('MySQL bazaga ulandi!');
    }
});

module.exports = conn;
