'use strict';
let db = require('mongoose'),
  Schema = db.Schema;
//
let CommentsSchema = new Schema({
  author: String,
  text: String
});

//
module.exports = db.model('Comment', CommentsSchema);
