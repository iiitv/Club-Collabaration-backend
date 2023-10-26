const express = require("express")
const Account = require('../models/Account')
const router = express.Router()
const passport = require('passport')
const { isLoggedIn } = require('../utils/middleware')
const sendVerificationMail = require('../utils/sendMail')
const jwt = require('jsonwebtoken')

router.post('/signup', function (req, res) {
  if (!(req.body.password && req.body.password.length >= 6)) {
    return res.json({
      error: 'Password must be atleast 6 characters long.',
    })
  }

  const newAccount = new Account({
    email: req.body.email,
    name: req.body.name
  })

  Account.register(newAccount, req.body.password, function (err, account) {
    if (err) {
      res.send(err)
    } else {
      sendVerificationMail(account)
      //Authenticate user right after registration
      passport.authenticate("local")(req, res, function () {
        res.send({ message: "Successful" })
      })
    }
  }
  )
})

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(400).send('Incorrect email or password')
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      res.send({ 'message': 'User authenticated' })
    })
  })(req, res, next)
})

router.post('/logout', function (req, res, next) {
  req.logout();
  req.session.destroy(() => {
    res.status(200)
      .clearCookie('connect.sid', { path: '/' })
      .json({ status: "Success" });
  })
})

router.get("/profile", isLoggedIn, (req, res) => {
  res.status(200).json(
    req.user
  )
})


//Endpoint to verify a email
router.get('/verify/:token', async (req, res) => {
  if (!req.params.token) {
    return res.status(401).send('Invalid verification URL')
  }
  try {
    const payload = jwt.verify(req.params.token, process.env.JWT_SECRET)
    const id = payload.id
    await Account.findByIdAndUpdate(id, { 'isVerified': true })
    return res.status(201).send('User verified successfully!')
  } catch (err) {
    console.log(err)
    return res.status(401).json(err)
  }
})

//Endpoint to send a verification email
router.get('/verify', async (req, res) => {
  if (!req.user) {
    return res.status(401).send('Unauthorized')
  }
  if (req.user.isVerified) {
    return res.status(200).send('Email is already verified')
  }
  sendVerificationMail(req.user)
  return res.status(200).send('Verification Email Sent')
})


module.exports = router
