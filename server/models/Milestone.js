const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const milestoneSchema = new Schema({
    name: {
        type: String,
        require: true,
        validate: {
            validator: (value) => {
              const result =Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
              (!result) ? false : true ;
            },
          },
    },
    dueDate: {
        type: Date,
        validate: {
            validator: (value) => {
                const result = Joi.date().default(Date.now).validate(value);
                (!result) ? false : true;
            },
        },
    },
    status: {
        type: String,
        enum: ['in progress', 'complete', 'cancelled'],
        default: 'in progress',
        validate: {
            validator: (value) => {
              const result =Joi.string().valid('in progress', 'complete', 'cancelled').default('in progress').required().validate(value);
              (!result) ? false : true ;
            },
          },   
    },
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
});

const milestone = mongoose.model('milestone', milestoneSchema);
module.exports = milestone;