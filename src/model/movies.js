'use strict';
let db = require('mongoose'),
  Schema = db.Schema;
//
let movieSchema = new Schema({
  // _id: Number,
  imdbID: String,
  name: String,
  genre: [String],
  overview: String,
  rating: String,
  ratingCount: String,
  poster: String,
  subscribers: [{
    type: db.Schema.Types.ObjectId,
    ref: 'User'
  }]
});


//
module.exports = db.model('Movie', movieSchema);
