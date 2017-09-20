const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const MOVIES = require('../../movies.json');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/movies', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
      res.json(MOVIES);
});

module.exports = router;