const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User model

const User = require('../models/User');

module.exports = function(passport) { //passport is passed through the app.js file
  passport.use(
    new LocalStrategy ({usernameField: 'email'}, (email, password, done) => {
      // match user
      User.fineOne({email: email})
        .then (user => {
          if (!user) {
            return done(null, false, { message: 'That email is not registered'});
          }

          // Match Password
          
        })
        .catch(err => console.log(err));
    })
  );
}
