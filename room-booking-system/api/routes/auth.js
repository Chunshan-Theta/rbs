const express = require('express')
const {
  signUp,
  signIn,
  signJWTForUser,
  requireJWT
} = require('../middleware/auth')

const router = new express.Router()

// Sign up
router.post('/auth/sign-up', signUp, signJWTForUser)

// Sign in
router.post('/auth', signIn, signJWTForUser)

// Auth handler sample
router.get('/auth_handler', requireJWT, (req, res, next) => {
  res.status(200).send('If you get this data, you have been authenticated via JWT!');
});

module.exports = router
