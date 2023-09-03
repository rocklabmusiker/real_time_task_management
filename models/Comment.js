const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const Joi = require('joi');
//create a comment model 
const commentSchema = new Schema({
    task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value)
                (!result) ? false : true;
            },
            message: 'task validate error for sommentSchema'
        }
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
                (!result) ? false : true;
            },
            message: 'author validation errr for commentSchema'
        }
    },
    text: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.string().required().validate(value);
                (!result) ? false : true;
            },
            message: 'provide valid text for commentSchema'
        }
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
        validate: {
            validator: (value) => {
                const result = Joi.date().default(Date.now).validate(value);
                (!result) ? false : true;
            },
        }
    },
     
});

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;