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
  const { clubID, userID, eventID, name, description, StartTime, EndTime, Approved } = req.body;
  console.log(req.body);
  let errors = [];

  if (!clubID || !userID || !eventID || !name || !description || !StartTime || !EndTime) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
      // Creating date variables for event
      var d1 = new Date(StartTime);
      var d2 = new Date(EndTime);
      
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
  
  if (errors.length > 0) {
    res.render('createevent', {
      errors,
      clubID, 
      userID, 
      eventID, 
      name, 
      description, 
      StartTime, 
      EndTime, 
      Approved
    });
  } else {
    Event.findOne({ eventID: eventID }).then(event => { // mongoose method that finds one user
      if (event) {
        errors.push({ msg: 'Event already exists' });
        res.render('createevent', {
          errors,
          clubID, 
          userID, 
          eventID, 
          name, 
          description, 
          StartTime, 
          EndTime, 
          Approved
        });
      } else {
        const newEvent = new Event({
          clubID, 
          userID, 
          eventID, 
          name, 
          description, 
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
            res.sendFile('~/OneDrive/Desktop/CCP/calendar_page/UserApril2019.html'); // Should redirect back to calendar
          })
          .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;
