const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const Joi = require('joi');
//create a comment model 
const commentSchema = new Schema({
    task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    text: {
        type: String,
        required: true,
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
     
});

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;