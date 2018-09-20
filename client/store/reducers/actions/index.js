// User authentication
const User = require('./action.user')

//Article handling
const Articles = require('./action.article')

module.exports = {
  ...User,
  ...Articles
}