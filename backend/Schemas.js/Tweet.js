import { User } from './User';

const mongoose = require('mongoose');

const tweet = new mongoose.Schema({
  id: Number,
  dateCreated: Date,
  stats: {
    likes: {
      type: Number,
      default: 0,
      required
    }, 
    retweets: {
      type: Number,
      default: 0,
      required,
    },
    comments: {
      type: Number,
      default: 0,
      required,
    },
  },
  type: String,
  media: [{
    type: String,
  }],
  content: {
    type: String,
    maxlength: 240,
  },
  tags: [{
    type: Array,
  }],
  user: User,
});

export const Tweet = mongoose.model('Tweet', tweet);