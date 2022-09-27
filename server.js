const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database





app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});