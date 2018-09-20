import express from 'express'
import passport from 'passport'

const router = express.Router()

/* Articles handling */
const Articles = require('./route.articles')(router)

/* Authentication handling */
const Auth = require('./route.user')(router, passport)

router.get('*', (req, res, next) => {
  next(new Error('New Error!!!!'))
})

export default router