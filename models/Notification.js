const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Notification model

const notificationSchema = new Schema({
      task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
      },
      author: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      read: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        enum: ['task created', 'task updated', 'task assigning'],
      },
      priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
      },
      url: {
        type: String,
      }
});

const notification = Schema.model( 'notification', notificationSchema );
module.exports = notification;