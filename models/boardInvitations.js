const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const boardInvitationsSchema = new Schema({
    board: {
        type: mongoose.Types.ObjectId,
        ref: 'board',
    },
    invitedUser: {
        type: mongoose.Types.Schema,
        ref: 'User',
    },
    invitedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
    },
    message: {
        type: String,
    },
    expirationDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const boardInvitation = mongoose.model('invite', boardInvitationsSchema);
module.exports = boardInvitation;