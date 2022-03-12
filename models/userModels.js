const mongoose = require('mongoose');
//const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
      unique: true,
      trim: true,
      //validate: [validator.isEmail, 'enter a valid email'],
      //   maxlength: [40, 'A user must have less or equal to 40 char'],
      //   minlength: [10, 'A tour must have more or equal to 10 characters'],
    },
  },
  {
    email: {
      type: String,
      required: [true, 'Must have an email'],
      unique: true,
      lowercase: true,
      //   maxlength: [40, 'An email must have less or equal to 40 char'],
      //   minlength: [10, 'An email must have more or equal to 10 characters'],
    },
  },
  { photo: String },

  {
    password: {
      type: String,
      required: [true, 'Must have a password'],
      unique: false,
      trim: true,
      //   maxlength: [12, 'A password must have less or equal to 40 char'],
      minlength: [8, 'A password must have more or equal to 10 characters'],
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm you password'],
    },
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
