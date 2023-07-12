const mongoose = require('mongoose');
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const chatSchema = new mongoose.Schema({
  userId : {
    type: String,
  },
  role : {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  messages: {
    type: [
      {
        message: String,
        // Additional properties for message, if needed
      },
    ],
    default: [],
  },
});

chatSchema.methods.addMessage = function (message) {
  this.messages.push({ message });
};

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
