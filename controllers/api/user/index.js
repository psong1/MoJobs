const express = require('express');
const router = express.Router();

const userController = require('./userController');

// router.post('/', userController.createUser);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

router.use('/users', userController);


module.exports = router;
