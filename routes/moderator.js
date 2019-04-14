const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');
const Club = require('../models/Club');


var query = Event.where({Approved:false});
query.select('-_id name StartTime EndTime club')
query.find(function(err,event) {
  if(err) console.log(err);
  else {
            router.get('/moderator', function(req, res) {
            res.render('moderator', {events: event});
          })
}});
module.exports = router;
