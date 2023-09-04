const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attachementSchema = new Schema({
    fileName: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.string().required().validate(value);
                (!result) ? false : true;
            },
        },
    },
    fileType: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.string().required().validate(value);
                (!result) ? false : true;
            },
        },
        
    },
    fileSize: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.number().required().validate(value);
                (!result) ? false : true;
            },
        },
    },
    contentType: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.string().required().validate(value);
                (!result) ? false : true;
            },
        },
    },
    data: {
        type: Buffer,
        required: true,
        validate: {
            validator: (value) => {
                const result = Joi.any().required().validate(value);
                (!result) ? false : true;
            },
        },
    },
    task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
        validate: {
            validator: (value) => {
                const result = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().validate(value);
                (!result) ? false : true;
            },
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        validate: {
            validator: (value) => {
                const result = Joi.date().default(Date.now).required().validate(value);
                (!result) ? false : true;
            },
        },
        
    },
    description: {
        type: String,
        validate: {
            validator: (value) => {
                const result = Joi.string().allow('').optional().validate(value);
                (!result) ? false : true;
            },
        },
    },
});

const attachement = mongoose.model('attachement',attachementSchema);
module.exports = attachement;