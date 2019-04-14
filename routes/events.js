const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

// Create Event Page
router.get('/createevent', (req, res) => res.render('createevent'));
// Create event
router.post('/createevent', (req, res) => {
  const { club, userID, eventID, name, description, location, date, startTime, endTime, Approved } = req.body;
  console.log(req.body);
  let errors = [];

  if (!club || !userID || !eventID || !name || !description || !location || !date || !startTime || !endTime) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
      var d1 = new Date(Date.parse(date+"T"+startTime));
      var d2 = new Date(Date.parse(date+"T"+endTime));
      d1.setHours(d1.getHours()-5.5);
      d2.setHours(d2.getHours()-5.5);
      var currentDate = new Date();
      var check = new Date();
      check.setDate(d1.getDate()-1);
      
    // Checking if the dates/times are correct
    if (check < currentDate) {
      errors.push({ msg: 'You must create an event at least one day in advance' });
    }
    else {
        if (d1.getDate() > d2.getDate()) {
          errors.push({ msg: 'Cannot create event with start date before the current date'});
        }
      else {
        if(!(d1.getDate() < d2.getDate())) {
          if(!(d1.getTime() < d2.getTime()))
          {
            errors.push({ msg: 'Cannot create an event with an end time before the start time'});
          }
        }
      }
    }
  }

  // Prepares dates for submission
  var StartTime=d1;
  var EndTime=d2;

  if (errors.length > 0) {
    res.render('createevent', {
      errors,
      club, 
      userID, 
      eventID, 
      name, 
      description,
      location,
      date, 
      startTime,
      endTime, 
      Approved
    });
  } else {
    Event.findOne({ eventID: eventID }).then(event => { // mongoose method that finds one user
      if (event) {
        errors.push({ msg: 'Event already exists' });
        res.render('createevent', {
          errors,
          club, 
          userID, 
          eventID, 
          name, 
          description,
          location,
          date, 
          startTime,
          endTime, 
          Approved
        });
      } else {
        const newEvent = new Event({
          club, 
          userID, 
          eventID, 
          name, 
          description,
          location, 
          StartTime, 
          EndTime, 
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
            // Redirecting user to login page!
            res.redirect('/dashboard'); // Should redirect back to calendar
          })
          .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;
