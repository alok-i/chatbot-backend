const mongoose = require('mongoose');
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const chatSchema = new mongoose.Schema({
  userId : {
    type: Number,
  },
  conversationId: {
    type: String,
  },
  Role : {
    type: String
  },
  messages: [{
     message: {type: String},
     role : {type: String},
  }],
});

chatSchema.methods.addMessage = function ({message, role}) {
  this.messages.push({ message, role });
};

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
