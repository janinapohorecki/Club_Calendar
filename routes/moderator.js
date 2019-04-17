const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

var query = Event.where({Approved:false});
query.select('_id name StartTime EndTime club Approved')

router.get('/moderator', (req,res) => {
  query.find(function(err,event) {
    if(err) console.log(err);
    else res.render('moderator', {events : event});
  })
});

module.exports = router;