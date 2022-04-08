const express = require('express'); 
require('dotenv').config();
const connection = require('./connection');
const app = express(); 

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server is running on port ' + app.get('port')); 
})