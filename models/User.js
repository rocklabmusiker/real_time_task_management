const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const Joy = require('joi');
//joy validation
const name = Joy.string().min(3).message('name must be 3 character long');
const email= Joy.string().email({tlds:{ allow:false}});
// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    //joy validation
    validate: {
      validator: (value) => {
        const result = name.validate(value);
        if (result.error) {
          return false;
        }
        return true;
      },
      message: 'name must be 3 character long'
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Enter Valid Email Address'], 
    validate: {
      validator: (value) => {
        const result = email.validate(value);
        if(result.error) {
          return false;
        }
        else{
          return true;
        };
      },
      message: 'Enter valid email',
    }

  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: (value) => {
        return value.length>=8;
    }
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

// Hash the password
UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Method to check password during login
UserSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;