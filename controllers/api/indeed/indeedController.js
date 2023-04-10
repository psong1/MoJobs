// uses axios to make a GET request to the SerpAPI
// job listings are parsed from the response data and passed to the job-listings
const apiKey = process.env.SERPAPI_KEY;

const axios = require('axios');
const express = require('express');
const router = express.Router();
  
  router.get('/search', async (req, res, next) => {
    try {
      const { query } = req.query;
      const response = await axios.get('https://serpapi.com/search', {
        params: {
          api_key: apiKey,
          q: query,
          output: 'json',
          hl: 'en',
          location: 'United States',
          google_domain: 'google.com'
        }
      });
      res.json(response.data);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;