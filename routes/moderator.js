const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

router.get('/moderator', (req, res) => res.render('moderator'));

var query = Event.where({Approved:true});
query.find(function(err,event) {
  let errors = [];
  if(err) err => console.log(err);
  else {
      console.log(event);
  }
});
module.exports = router;
