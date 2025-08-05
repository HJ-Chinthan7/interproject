const express = require('express');
const router = express.Router();
const validateSignIn = require('../middleware/validateSignIn');
const { signup, signin, logout } = require('../controllers/authController');
const validateSignUp = require('../middleware/validateSignUp');

router.post('/signup', validateSignUp, signup);


router.post('/login', validateSignIn, signin);


router.post('/logout', logout);


module.exports = router;