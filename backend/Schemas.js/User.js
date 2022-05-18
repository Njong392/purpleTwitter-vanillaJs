const mongoose = require('mongoose');

const user = new mongoose.Schema({
  id: Number,
  handle: {
    type: String,
    maxlength: 50,
    required,
  },
  name: {
    type: String,
    maxlength: 50,
    required,
  },
  bio: {
    type: String,
    maxlength: 240,
  },
  location: {
    type: String,
    maxlength: 100,
  },
  birthDate: Date,
});

export const User = mongoose.model('User', user);