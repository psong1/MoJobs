const express = require('express');
const router = express.Router();

const authRoutes = require('./auth-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/', homeRoutes);

module.exports = router;
