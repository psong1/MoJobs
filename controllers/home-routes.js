const express = require('express');
const router = express.Router();
const indeedController = require('./api/indeed/indeedController');
const { Posts } = require('../models')

// Route for getting all job posts from the database
router.get('/posts', async (req, res) => {
    try {
      const posts = await Posts.findAll();
      res.render('posts', { posts });
    } catch (error) {
      console.error(error);
      res.render('error', { message: 'Error retrieving job posts' });
    }
  });
  
  // Route for creating a new job post in the database
  router.post('/posts', async (req, res) => {
    try {
      const { title, description, location } = req.body;
      const newPost = await Posts.create({ title, description, location });
      res.redirect('/posts');
    } catch (error) {
      console.error(error);
      res.render('error', { message: 'Error creating new job post' });
    }
  });
  
// Route for getting job listings from the Indeed API
// router.get('/jobs/:searchTerm', indeedController.getJobListings);

module.exports = router;