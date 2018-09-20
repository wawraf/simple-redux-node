const { GET_ALL_ARTICLES, GET_ARTICLE } = require('./actionTypes')

const articles = (articles = [], action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return action.payload
    default:
      return articles
  }
}

const currentArticle = (article = {}, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return action.payload
    default:
      return article
  }
}

module.exports = {
  articles, 
  currentArticle
}