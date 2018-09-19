import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/hello', (req, res) => {
  console.log('something is calling!')
  res.status(200).json({info: 'hello'})
})


/* Polls handling */
//const Polls = require('./polls')(router)

/* Authentication handling*/
//const Auth = require('./auth')(router, passport)

export default router