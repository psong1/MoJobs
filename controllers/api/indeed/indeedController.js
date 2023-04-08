// uses axios to make a GET request to the Indeed API
// job listings are parsed from the response data and passed to the job-listings

const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/jobs', (req, res) => {
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

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://indeed-indeed.p.rapidapi.com/apigetjobs',
//   params: {publisher: '<REQUIRED>', jobkeys: '<REQUIRED>', v: '2', format: 'json'},
//   headers: {
//     'X-RapidAPI-Key': 'cdf8152cc0mshacae05de6ad9963p13c06bjsnebb7ec23a5f1',
//     'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });