const mongoose= require('mongoose');
const Schema= mongoose.Schema;
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

const comment = mongoose.Model('comment', commentSchema);
module.exports = comment;