'use strict';
let db = require('mongoose'),
  Schema = db.Schema;
//
let userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String
});


//
module.exports = db.model('User', userSchema);
