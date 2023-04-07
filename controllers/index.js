const express = require('express');
const router = express.Router();

const authRoutes = require('./auth-routes');
const homeRoutes = require('./home-routes');

router.use('/auth', authRoutes);
router.use('/', homeRoutes);

module.exports = router;
