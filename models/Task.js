const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model schema for Task
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
    validate: {
      validator: (value) => {
        const result = Joi.String().trim().min(4).required().validate(value);
        (!result) ? false : true;
      },
      message: 'title is not valid'
    },
  },
  description: {
    type: String,
    validate: {
      validator: (value) => {
        const result = Joi.string().allow('',null).validate(value);
        (!result) ? false : true;
      },
      message: 'not valid description'
    },
  },
  dueDate: {
    type: Date,
    
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    validate: {
      validator: (value) => {
        const result = Joi.string().valid('Pending', 'In Progress', 'Completed').validate(value);
        (!result) ? false : true;
      },
      message: 'write valid array of status : Pending In Progress Completed'
    },
  },
  assignedTo: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    validate: {
      validator: (value) => {
        const result = joi.string().regex(/^[0-9a-fA-F]{24}$/).validate(value);
        (!result) ? false : true;
      },
      message: 'hey your given ObjectId is not matches with mongo object'
    },
  },
  board: {
    type: mongoose.Types.ObjectId,
    ref: 'Board',
    validate: {
      validator: (value) => {
        const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).validate(value);
        (!result) ? false : true;
      },
      message: 'hey broh your board given objectId is not match with mongo obj'
    },
  },
  priority: {
    type: Number,
    default: 1,
    validate: {
      validator: (value) => {
        const result = Joi.number().default(1).validate(value);
        (!result) ? false : true;
      },
      message: 'in priority please use number'
    },
  },
  tags: [{ 
    type: String,
    validate: {
      validator: (value) => {
        const result = Joi.array().items(Joi.string()).validate(value);
        (!result) ? false : true;
      },
      message: 'tags are arraay of string'
    },
  }],

  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
      validate: {
        validator: (value) => {
          const result = Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).validate(value);
          (!result) ? false : true;
        },
        message: 'please provide valid message'
      },
    },
  ],
  attachment: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Attachment',
      validate: {
        validator: (value) => {
        const result = Joi.array().items(Joi.string.regex(/^[0-9a-fA-F]{24}$/)).validate(value);
        (!result) ? false : true;
        },
        message: 'your attachment validation error provie valid attachment'
      },
    },
  ],
  notification: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Notification',
      validate: {
        validator: (value) => {
        const result = Joi.array().items(Joi.string.regex(/^[0-9a-fA-F]{24}$/)).validate(value);
        (!result) ? false : true;
        },
        message: 'olease provide valid notification'
      },
    },
  ],
});
const task = mongoose.model('task', taskSchema);
module.exports = task;
