// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Number,
    required: true
  },
  permissionLevel: {
    type: Number, // default to 3
    default: '3',
    required: true
  }
});

const User = mongoose.model('User', UserSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = User; // can use this in other files
