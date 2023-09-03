const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attachementSchema = new Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    fileSize: {
        type: Number,
        required: true,
    },
    contentType: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer,
        required: true,
    },
    task: {
        type: mongoose.Types.ObjectId,
        ref: 'task',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
});

const attachement = mongoose.model('attachement',attachementSchema);
module.exports = attachement;