const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const Employee = require('./Department');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'jonathon',
        database: 'Employee_db'

    },
    console.log('Conected to the database!')
);

// let sql = "select * from ";
// let response = db.query(sql);
// let sqlStatement = "SELECT * FROM DEPARTMENT";


// function queryDb(sqlStatement){
//     return 
// }

db.query('SELECT * FROM deparrment');

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});