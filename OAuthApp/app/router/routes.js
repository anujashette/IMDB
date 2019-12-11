/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Routing defined using methods of the Express app.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const express = require('express');
const app = express.Router();
const passport = require('passport');
const auth = require('../middleware/auth');
const userController = require('../controller/googleAuth.controller');
const profile = 'https://www.googleapis.com/auth/userinfo.profile';
const email = 'https://www.googleapis.com/auth/userinfo.email';

app.get('/',function(req,res){
    res.send('Google Auth API running...');
});

auth(passport);

app.get('/auth/google', passport.authenticate('google', { accessType: 'offline', prompt: 'consent', includeGrantedScopes: true, scope: [profile, email] }));

app.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: '/',session: false}), userController.loginWithGoogle);

module.exports = app;