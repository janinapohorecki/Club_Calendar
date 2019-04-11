const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load Event model
const Event = require('../models/Event');

router.get('/moderator', (req, res) => res.render('moderator'));

var event1 = Event.find({Approved: false});

router.post('/moderator', (req, res, next) => {                        
        res.render('/moderator', {
        event: event1
    });   
});
module.exports = router;
