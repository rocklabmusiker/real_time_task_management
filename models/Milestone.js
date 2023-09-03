const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const milestoneSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['in progress', 'complete', 'cancelled'],
        default: 'in progress',
        
    },
    task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const milestone = mongoose.model('milestone', milestoneSchema);
module.exports = milestone;