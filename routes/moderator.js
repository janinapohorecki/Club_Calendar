const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

var query = Event.where({Approved:false});
query.select('-_id name description StartTime EndTime')
query.find(function(err,event) {
  if(err) console.log(err);
  else {
          //obj = JSON.parse(json);
          router.get('/moderator', function(req, res) {
          res.render('moderator', {blah: event});
      })
  }
});
module.exports = router;
