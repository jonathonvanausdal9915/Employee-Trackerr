const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

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

// db.query()

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});