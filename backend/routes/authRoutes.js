const express = require('express');
const router = express.Router();
const validateSignIn = require('../middlewares/signinValidation');
const { signup, login, logout } = require('../controllers/authController');
const validateSignUp = require('../middlewares/signinValidation');

router.post('/signup', validateSignUp, signup);


router.post('/login', validateSignIn, login);


router.post('/logout', logout);