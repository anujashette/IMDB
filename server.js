/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js 
 *  
 *  Purpose:  Entry point.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   7-10-2019
 *
 ******************************************************************************/

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/router/routes');
var expressValidator = require('express-validator');
var app = express();
require('./app/mongoose/db.connection');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expressValidator());
app.use('/',routes);

app.get('/',function(req,res){
    res.send('IMDB API running...');
});
app.listen(process.env.PORT, function () { 
    console.log('app running on port ',process.env.PORT);
});

module.exports = app;