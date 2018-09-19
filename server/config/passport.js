const passport = require('passport')
//const localStrategy = require('passport-local').Strategy
const githubStrategy = require('passport-github').Strategy

import { User } from '../models'

module.exports = () => {
  
  passport.serializeUser((user, done) => {
    console.log(`___SERIALIZE${user}+++${user}`);
    done(null, user.id)
  })
  
  passport.deserializeUser((id, done) => {
    console.log(`____DESERIALIZE${id}+++${id}`);
    User.findOne(id, (err, user) => {
      done(null, user)
    })
  })
  
  passport.use(new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callback: process.env.GITHUB_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOneAndUpdate({ 'github.id': profile.id }, 
                            { 'github.name': profile.displayName || 'Buddy',  'github.id': profile.id }, 
                            { upsert: true, new: true }, 
                            (err, user) => {
        if (err) return done(err, user)
        return done(null, user)
      })
    }
  ))
  
}