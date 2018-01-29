/**
 * Comments route and methods
 * 
 */
const express = require('express'),
  router = express.Router(),
  Movie = require('./src/model/movies');

// comments route
router.route('/movie')

  // GET all movie from the collection.
  .get(function(req, res) {
    Movie.find(function(err, movies) {
      if (err) {
        res.send(err);
      }
      res.json(movies);
    });
  })

  // POST new movie in the collection.
  .post(function(req, res) {
    let movie = new Movie();
    movie.title = req.body.title;
    movie.imdbID = req.body.imdbID;
    movie.poster = req.body.poster;
    movie.overview = req.body.overview;
    movie.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Movie successfully added.' });
    });

  });

// Adding a route to a specific movie based on the database ID
router.route('/movies/:movie_id')

  // PUT method give us the ability to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Movie.findById(req.params.comment_id, function(err, movie) {
      if (err) {
        res.send(err);
      }
      // setting the new author and text to whatever was changed.
      // If nothing changed we will no alter the field.
      (req.body.title) ? movie.author = req.body.title: null;
      (req.body.text) ? movie.text = req.body.text: null;
      // save it.
      movie.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Movie has been updated.' });
      });
    });
  })

  // DELETES method from removing a comment from our database
  .delete(function(req, res) {
    Movie.remove({ _id: req.params.movie_id }, function(err, movie) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Movie has been deleted' });
    });

  });
