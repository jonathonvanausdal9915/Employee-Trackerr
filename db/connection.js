const mysql = require('mysql2');
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Tr1cycl3',
        database: 'Employee_db'

    },
    console.log('Conected to the database!')
);



module.exports = db;