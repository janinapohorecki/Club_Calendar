const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

// Adapt for /moderator
router.post('/moderator', (req, res) => {
  const { _id, name, StartTime, EndTime, club, Approved } = req.body;
  console.log(req.body);
  let errors = [];

  if (!club || !name || !description || !location || !date || !startTime || !endTime) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (errors.length > 0) {
    res.render('moderator', {
      errors,
      _id,
      name,
      StartTime,
      EndTime,
      club,
      Approved
    });
  } else {
    Event.findOneAndUpdate({ _id: _id }).then(event => { // mongoose method that finds one user
        const newEvent = new Event({
          _id,
          name,
          StartTime,
          EndTime,
          club,
          Approved
        });

        newEvent
          // Save User
          .save()
          .then(event => {
            req.flash(
              'success_msg',
              'Your event was submitted and is waiting for approval'
            );
            
            res.render('successfulEvent', {event : newEvent}); // Redirects to success page
          })
          .catch(err => console.log(err));
      });
    }});

module.exports = router;


var query = Event.where({Approved:false});
query.select('_id name StartTime EndTime club Approved')
router.post('/moderator', (req,res) => {
  const {_id, name, StartTime, EndTime, club, Approved} = req.body;
  query.find(function(err,event) {
    if(err) console.log(err);
    else res.render('moderator', {events : event});
  })
});
