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
// Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
  // PUT method give us the ability to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
      if (err) {
        res.send(err);
      }
      // setting the new author and text to whatever was changed.
      // If nothing changed we will no alter the field.
      (req.body.author) ? comment.author = req.body.author: null;
      (req.body.text) ? comment.text = req.body.text: null;
      // save it
      comment.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Comment has been updated' });
      });
    });
  })
  // delete method from removing a comment from our database
  .delete(function(req, res) {
    // selects the comment by it's ID, then remove it.
    Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Comment has been deleted' });
    });
  });
// Call /api
app.use('/api', router);
// Chop Chop
app.listen(port, function() {
  console.log(`API running on port ${port}`);
});
/**

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



// connect to db

*/
db.connect(dbConnect);
