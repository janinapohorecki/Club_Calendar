// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  clubID: {
    type: Number,
    required: true,
    unique: true
  },
  Clubname: {
    type: String,
    required: true
  },
  clubType: {
    type: String,
    required: true
  },
  clubEmail: {
    type: String,
    required: true
  },
  followers: {
    type: [Number],
    default: undefined,
    required: false
  }
});

const Club = mongoose.model('Club', ClubSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = Club; // can use this in other files
