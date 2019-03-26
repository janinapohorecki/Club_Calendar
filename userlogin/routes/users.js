const express = require('express');
const router = express.Router();

// Login Page
router.get('/login', (req,res) => res.render('login'));

// Register Page
router.get('/register', (req,res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
  const { name, email, password, password2} = req.body;
  let errors = [];

  // Check Required fields
  if (!name || !email || !password || !password2) {
    errors.push({'Please fill in all fields!'});
  }

  if(password != password2) {
    errors.push({ msg: 'passwords do not match'});
  }

  // Check Password Length
  if(password.Length < 6) {
    errors.push({msg: 'Password should be at eleast 6 characters!'});
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    res.send('pass');
  }
});


module.exports = router;
