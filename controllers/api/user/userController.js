const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).send('Username already exists');
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    res.status(201).send('User created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error getting user');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update the user
    await user.update(req.body);

    res.status(200).send('User updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating user');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Delete the user
    await user.destroy();

    res.status(200).send('User deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting user');
  }
};
