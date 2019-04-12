const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/User');

router.get('/', (req, res) => res.render('homepage'));

router.get('/dashboard', (req, res) => res.render('dashboard'));
/*
var query = Event.where({Approved:false});
query.select('-_id name')
query.find(function(err,event) {
  if(err) console.log(err);
  else {
          router.get('/moderator', function(req, res) {
          res.render('moderator', {blah: event});
      })
  }
});
*/

// router.get('/testingDashboard', (req, res) => res.render('testingDashboard'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
