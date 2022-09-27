const mysql = require('mysql2');
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'jonathon',
        database: 'Employee_db'

    },
    console.log('Conected to the database!')
);



module.exports = db;