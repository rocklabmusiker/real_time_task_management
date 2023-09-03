const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema;
const Joi = require('joi');
const boardSchema = new Schema({
    boardName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 4,
      validate: {
        validator: (value) =>{
          const results =Joi.string().trim().min(4).required().validate(value);
          (!results) ? false: true;
        },
        message: 'Invalid board name'
      }
    
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      validate: {
        validator: (value) => {
          const result = Joi.string().length(24).validate(value)
          (!result) ? false : true;
        },
        message: 'Invalid objectId for createdBy'

      }
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    visibility: {
      type: String,
      enum: ['Private', 'Team', 'Public'],
      validate: {
        validator: (value) => {
          const result = Joi.string().valid('Private','Team', 'Public').validate(value);
          (!result) ? false :true;
        },
        message: 'invalid visibility'
      }
    },
    description: {
      type: String,
      validate: {
        validator: (value) => {
          const result = Joi.string().allow('',null).validate(value);
          (!result) ? false : true;
        }
      }
    },
    members: [{ 
      type: mongoose.Types.ObjectId,
      ref: 'User' ,
      validate: {
        validator: (value) => {
          const result = Joi.array().items(Joi.string().length(24)).validate(value);
          (!result) ? false : true;
        },
        message: 'Invalid members objectId array '
      }
      }],

  }
  );
  const Board = mongoose.model('Board', boardSchema);
  
  module.exports = Board;