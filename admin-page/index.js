const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose');

app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})
