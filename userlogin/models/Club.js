// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  clubID: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  clubType: {
    type: String,
    required: true
  },
  followers: {
    type: Number[100]
  },
  clubEmail: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Club', ClubSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = Club; // can use this in other files
