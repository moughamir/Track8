'use strict';
let db = require('mongoose'),
  Schema = db.Schema;
//
let showSchema = new Schema({
  // _id: Number,
  imdbID: String,
  name: String,
  firstAired: Date,
  genre: [String],
  overview: String,
  rating: String,
  ratingCount: String,
  poster: String,
  subscribers: [{
    type: db.Schema.Types.ObjectId,
    ref: 'User'
  }],
  episodes: [{
    season: Number,
    episodeNumber: Number,
    episodeName: String,
    firstAired: Date,
    overview: String
  }]
});


//
module.exports = db.model('Show', showSchema);
