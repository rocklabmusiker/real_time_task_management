const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema
const boardSchema = new Schema({
    boardName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 4,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    visibility: {
      type: String,
      enum: ['Private', 'Team', 'Public'],
    },
    description: {
      type: String,
    },
    members: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  });
  
  const Board = mongoose.model('Board', boardSchema);
  
  module.exports = Board;