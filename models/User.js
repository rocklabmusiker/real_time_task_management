const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

//Define User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Enter Valid Email Address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
  avatar: {
    type: String,
    default: null,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
});

//hash the password
UserSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8);
    }
    next();
});
//Method to check password during login
UserSchema.method.isValidPassword =async function(password)
{
    return await bcrypt.compare(password,this.password)
};

const User=mongoose.model('User',UserSchema);
module.exports=User;