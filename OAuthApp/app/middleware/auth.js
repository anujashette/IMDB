const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();
console.log(process.env.CLIENTURL);

module.exports = (passport) => {
    passport.serializeUser((user, done) => { 
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENTID,
        clientSecret: process.env.SECRETID,
        callbackURL: process.env.CLIENTURL
    },
    (token, refreshToken, profile, done) => {
        console.log(profile);
        console.log(refreshToken,' \n', token);
        
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};