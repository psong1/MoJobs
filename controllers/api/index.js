const express = require('express');
const router = express.Router();

// Import routes for each resource
const indeedRouter = require('./indeed');
const userRouter = require('./user');

// Mount routes for each resource
router.use('/indeed', indeedRouter);
router.use('/users', userRouter);

module.exports = router;
