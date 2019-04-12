const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => res.render('homepage'));

router.get('/dashboard', (req, res) => res.render('dashboard'));

// router.get('/testingDashboard', (req, res) => res.render('testingDashboard'));

// Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );

module.exports = router;
