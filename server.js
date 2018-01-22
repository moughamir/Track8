'use strict';
// server
const express = require('express'),
  // Database
  db = require('mongoose'),
  bodyParser = require('body-parser'),
  // security
  //bcrypt = require('bcryptjs'),
  // server instances
  app = express(),
  router = express.Router(),
  //port = process.env.PORT || 8081,
  port = 8081,
  // db config
  dbConnect = "mongodb://localhost/track8";
// models
let Comment = require('./src/model/comments');
// API conf
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS prevention
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// Routes && API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
});
// comments route
router.route('/comments').get(function(req, res) {
    // look at our Comment Schema
    Comment.find(function(err, comments) {
      if (err) {
        res.send(err);
      }
      // responds with json object of our database comments,
      res.json(comments);
    });
  })
  //post new comment to the db
  .post(function(req, res) {
    var comment = new Comment();
    // body parsser lets us use the req.body
    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Comment successfully added.' });
    });
  });
// Call /api
app.use('/api', router);
// Chop Chop
app.listen(port, function() {
  console.log(`API running on port ${port}`);
});
/**
let showSchema = new db.Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: Number,
  ratingCount: Number,
  status: String,
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

let userSchema = new db.Schema({
  email: {
    type: String,
    unique: true
  },
  password: String
});

userSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

let User = db.model('User', userSchema),
  Show = db.model('Show', showSchema);

// connect to db

*/
db.connect(dbConnect);
