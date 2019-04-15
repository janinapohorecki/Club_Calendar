const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Event = require('../models/Event');

var query1 = Event.where({Approved:true});
query1.select('-_id club name StartTime EndTime description location')
query1.find(function(err,event) {
  router.get('/', (req, res) => res.render('homepage', {
    events : event
  })
)});

// Dashboard
var query2 = Event.where({Approved:true});
query2.select('-_id club name StartTime EndTime description location')
query2.find(function(err,event) {
  router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user,
    events : event
  })
)});

module.exports = router;
