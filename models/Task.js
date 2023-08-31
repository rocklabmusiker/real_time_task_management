const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model schema for Task
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
  },
  assignedTo: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  board: {
    type: mongoose.Types.ObjectId,
    ref: 'Board',
  },
  priority: {
    type: Number,
    default: 1,
  },
  tags: [{ type: String }],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  attachment: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Attachment',
    },
  ],
  notification: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Notification',
    },
  ],
})
const task = mongoose.model('task', taskSchema);
module.exports = task;
