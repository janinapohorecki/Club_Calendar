const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Event = require('../models/Event');

router.get('/', (req, res) => res.render('homepage'));

// router.get('/testingDashboard', (req, res) => res.render('testingDashboard'));

// Dashboard


var query = Event.where({Approved:true});
query.select('-_id name StartTime EndTime description location')
query.find(function(err,event) {
  router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user,
    events : event
  })
      )});


module.exports = router;
