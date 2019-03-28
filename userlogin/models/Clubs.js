// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  clubID: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  clubType: {
    type: string
  }
});

const Event = mongoose.model('Club', ClubSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = Club; // can use this in other files
