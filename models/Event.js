// creating a schema for all the different fields for our user

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  club: {
    type: Number,
    required: true,
    unique: true
  },
  userID: {
    type: Number,
    required: true,
    unique: true
  },
  eventID: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
    },
  StartTime: {
    type: Date,
    required: true
    },
  EndTime: {
    type: Date,
    required: true
    },
  Approved: {
    type: Boolean,
    required: true,
    default: true
    }
});

const Event = mongoose.model('Event', EventSchema); // putting into a variable and passing in model name and then model schema then exports

module.exports = Event; // can use this in other files
