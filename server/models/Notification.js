const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi')
//Notification model

const notificationSchema = new Schema({
      task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
        validate: {
          validator: (value) => {
            const result =Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
            (!result) ? false : true ;
          },
        },
      },
      author: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        validate: {
          validator: (value) => {
            const result =Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
            (!result) ? false : true ;
          },
        },
      },
      text: {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            const result =Joi.string().required().validate(value);
            (!result) ? false : true ;
          },
        },
      },
      createdAt: {
        type: Date,
        default: Date.now,
        validate: {
          validator: (value) => {
            const result =Joi.date().default(Date.now).validate(value);
            (!result) ? false : true ;
          },
        },
      },
      read: {
        type: Boolean,
        default: false,
        validate: {
          validator: (value) => {
            const result =Joi.boolean().default(false).validate(value);
            (!result) ? false : true ;
          },
        },
      },
      type: {
        type: String,
        enum: ['task created', 'task updated', 'task assigning'],
        validate: {
          validator: (value) => {
            const result =Joi.string().valid('created', 'task updated', 'task assigning').required().validate(value);
            (!result) ? false : true ;
          },
        },
      },
      priority: {
        type: String,
        enum: ['high', 'medium', 'low'],
        validate: {
          validator: (value) => {
            const result =Joi.string().valid('high', 'medium', 'low').required().validate(value);
            (!result) ? false : true ;
          },
        },
        
      },
      url: {
        type: String,
      }
});

const notification = mongoose.model( 'notification', notificationSchema );
module.exports = notification;