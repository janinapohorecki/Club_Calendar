const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

router.get('/moderator', (req, res) => res.render('moderator'));
var i=0;
var query = Event.where({Approved:false});
query.find(function(err,event) {
  if(err) console.log(err);
  else {
      console.log(event);
  }
});
module.exports = router;
