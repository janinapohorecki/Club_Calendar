const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
// router.get('../../calendar_page/April2019.html', ensureAuthenticated, (req, res) =>
//   res.render('../../calendar_page/April2019.html', {
//     user: req.user
//   })
// );

module.exports = router;
