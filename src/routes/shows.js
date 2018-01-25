/**
 * Comments route and methods
 * 
 */
const express = require('express'),
  router = express.Router(),
  Show = require('./src/model/shows');

// comments route
router.route('/shows')

  // GET all shows from the collection.
  .get(function(req, res) {
    Show.find(function(err, shows) {
      if (err) {
        res.send(err);
      }
      res.json(shows);
    });
  })

  // POST new show in the collection.
  .post(function(req, res) {
    let show = new Show();
    show.title = req.body.title;
    show.imdbID = req.body.imdbID;
    show.poster = req.body.poster;
    show.overview = req.body.overview;
    show.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Show successfully added.' });
    });

  });

// Adding a route to a specific show based on the database ID
router.route('/shows/:show_id')

  // PUT method give us the ability to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Show.findById(req.params.comment_id, function(err, show) {
      if (err) {
        res.send(err);
      }
      // setting the new author and text to whatever was changed.
      // If nothing changed we will no alter the field.
      (req.body.title) ? show.author = req.body.title: null;
      (req.body.text) ? show.text = req.body.text: null;
      // save it.
      show.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Show has been updated.' });
      });
    });
  })

  // DELETES method from removing a comment from our database
  .delete(function(req, res) {
    Show.remove({ _id: req.params.show_id }, function(err, show) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Show has been deleted' });
    });

  });
