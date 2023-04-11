const { User } = require('../../../models');
const bcrypt = require('bcrypt');
const router = require('express').Router();


// TEST route /api/users/users/

router.post('/', async (req, res) => {
  console.log('Made it here');
  try {
    const username = req.body.username;
    const password = req.body.password;

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
    res.status(500).json(err);
}

router.get('/:id', async (req, res) => {
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
});

router.patch('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
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
})
});
});
module.exports = router;

