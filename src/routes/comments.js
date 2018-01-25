/**
 * Comments route and methods
 * 
 */
const express = require('express'),
  router = express.Router(),
  Comment = require('./src/model/comments');

// comments route
router.route('/comments')

  // GET all comments from the collection.
  .get(function(req, res) {
    // look at our Comment Schema
    Comment.find(function(err, comments) {
      if (err) {
        res.send(err);
      }
      // responds with json object of our database comments,
      res.json(comments);
    });
  })

  // POST new comment in the collection.
  .post(function(req, res) {
    let comment = new Comment();
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
      // save it.
      comment.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Comment has been updated' });
      });
    });
  })

  // DELETES method from removing a comment from our database
  .delete(function(req, res) {
    // selects the comment by it's ID, then remove it.
    Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Comment has been deleted' });
    });

  });
