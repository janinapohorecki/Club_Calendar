const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Club model
const Club = require('../models/Club');

// Create Club Page
router.get('/createclub', (req, res) => res.render('createclub'));

// Create club
router.post('/createclub', (req, res) => {
  const { clubID, name, clubType, clubEmail, followers } = req.body;
  console.log(req.body);
  let errors = [];

  if (!clubID || !name || !clubType || !clubEmail) {
    errors.push({ msg: 'Please enter all fields' });
  }
  
  if (errors.length > 0) {
    res.render('createclub', {
      errors,
      clubID,
      name,
      clubType,
      clubEmail,
      followers 
    });
  } else {
    Club.findOne({ clubID: clubID }).then(club => { // mongoose method that finds one user
      if (club) {
        errors.push({ msg: 'Club already exists' });
        res.render('createclub', {
          errors,
          clubID,
          name,
          clubType,
          clubEmail,
          followers 
       });
      } else {
        const newClub = new Club({
          clubID,
          name,
          clubType,
          clubEmail,
          followers 
        });

        newClub
          // Save User
          .save()
          .then(club => {
            req.flash(
              'success_msg',
              'Club added'
            );
            // Redirecting user to login page!
            res.redirect('createclub'); // Should redirect back to calendar
          })
          .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;
