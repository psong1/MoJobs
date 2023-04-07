const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { username: req.body.username } });
    if (existingUser) {
      return res.status(409).send('Username already exists');
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword
    });

    res.status(201).send('User created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send('Invalid username or password');
    }

    // Set the user session
    req.session.user = user;
    res.status(200).send('Login successful');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

// Route for user logout
router.post('/logout', async (req, res) => {
  try {
    // Clear the user session
    req.session.destroy();
    res.status(200).send('Logout successful');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging out');
  }
});

module.exports = router;
