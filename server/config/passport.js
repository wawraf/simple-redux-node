//const localStrategy = require('passport-local').Strategy
const githubStrategy = require('passport-github').Strategy

const { User } = require('../models')

module.exports = (passport) => {
  
  passport.serializeUser((user, done) => {
    console.log(`___SERIALIZE ${user}+++${user}`);
    done(null, user._id)
  })
  
  passport.deserializeUser((id, done) => {
    console.log(`___DESERIALIZE ${id}+++${id}`);
    User.findById(id, (err, user) => {
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
      const search = { 'github.id': profile.id }
      
      const update = { 'github.username': profile.displayName || 'Buddy',  'github.id': profile.id }
      
      User.findOneAndUpdate(search, 
                            update, 
                            { upsert: true, new: true }, 
                            (err, user) => {
        if (err) return done(err, user)
        return done(null, user)
      })
    }
  ))
  
}