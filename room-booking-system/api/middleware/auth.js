const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJWT = require('passport-jwt')
const User = require('../models/User')

const jwtSecret = process.env.JWT_SECRET
const jwtAlgorithm = process.env.JWT_ALGORITHM
const jwtExpiresIn = 6000

passport.use(User.createStrategy())

const signUp = (req, res, next) => {

  if (!req.body.email || !req.body.password) {
    res.status(400).send('No username or password provided.')
  }

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  console.log("In");

  User.register(user, req.body.password, (error, user) => {
    if (error) {
        console.log("api:signUp res:error",res);
        next(error)
        return
    }else{
        console.log("api:signUp res",res);
        req.user = user
        next()
    }
  })


}

const signJWTForUser = (req, res) => {
  const user = req.user
  const token = JWT.sign(
    {
      email: user.email
    },
    jwtSecret,
    {
      algorithm: jwtAlgorithm,
      expiresIn: 600,
      subject: user._id.toString()
    }
  )
  res.json({ token })
}

passport.use(
  new PassportJWT.Strategy(
    {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
      algorithms: [jwtAlgorithm]
    },
    (payload, done) => {
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
        .catch(error => {
          done(error, false)
        })
    }
  )
)

module.exports = {
  initialize: passport.initialize(),
  signUp,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForUser
}
