// uses axios to make a GET request to the Indeed API
// job listings are parsed from the response data and passed to the job-listings

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/jobs/:searchTerm', (req, res) => {
  const searchTerm = req.params.searchTerm;
  const apiKey = process.env.RAPIDAPI_KEY; // The RapidAPI key

  const apiUrl = `https://indeed-com.p.rapidapi.com/search/jobs?q=${searchTerm}&limit=10`;

  const options = {
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'indeed-com.p.rapidapi.com'
    }
  };

  axios
    .get(apiUrl, options)
    .then(response => {
      const jobListings = response.data.results;
      res.render('job-listings', { jobListings });
    })
    .catch(error => {
      console.error(error);
      res.render('error', { message: 'Error retrieving job listings' });
    });
});

module.exports = router;

