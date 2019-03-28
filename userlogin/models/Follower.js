// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const FollowerSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Eventname: {
    type: String,
    required: true
  },
  follow: {
    type: Boolean,
    required: true
  }
});

const Follower = mongoose.model('Follower', FollowerSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = Follower; // can use this in other files
