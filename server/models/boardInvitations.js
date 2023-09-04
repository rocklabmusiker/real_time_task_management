const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');
const boardInvitationsSchema = new Schema({
    board: {
        type: mongoose.Types.ObjectId,
        ref: 'board',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).validate(value);
                (!result) ? false : true;
            },      
        },
    },
    invitedUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
                (!result) ? false : true;
            },       
        },
    },
    invitedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
                (!result) ? false : true;
            },   
        },
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        validate: {
            validator: (value) => {
                const result = Joi.string().valid('Pending', 'accepted','rejected').validate(value);
                (!result) ? false : true;
            },
            
        },
    },
    message: {
        type: String,
        validate: {
            validator: (value) => {
                const result = Joi.string().allow('').optional().validate(value);
                (!result) ? false : true;
            },
            
        },
    },
    expirationDate: {
        type: Date,
        validate: {
            validator: (value) => {
                const result = Joi.date().optional().validate(value);
                (!result) ? false : true;
            },
            
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        validate: {
            validator: (value) => {
                const result = Joi.date().default(Date.now).validate(value);
                (!result) ? false : true;
            },
            
        },
    },
});

const boardInvitation = mongoose.model('invite', boardInvitationsSchema);
module.exports = boardInvitation;