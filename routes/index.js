const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Event = require('../models/Event');

var query1 = Event.where({Approved:true});
query1.select('-_id club name StartTime EndTime description location')
router.get('/', function(req,res) {
  query1.find(function(err,event) {
    if(err) console.log(err);
    else res.render('homepage', {events : event});
  })
});

var query2 = Event.where({Approved:true});
query2.select('-_id club name StartTime EndTime description location')
router.get('/dashboard', ensureAuthenticated, function(req,res) {
  query2.find(function(err,event) {
    if(err) console.log(err);
    else res.render('dashboard', {
      user : req.user,
      events : event
    });
  })
});

module.exports = router;
