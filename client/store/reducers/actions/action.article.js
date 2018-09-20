import { GET_ALL_ARTICLES, GET_ARTICLE } from '../actionTypes'

const getAllArticles = (articles) => (
  {type: GET_ALL_ARTICLES, payload: articles}
)

const getArticle = (article) => (
  {type: GET_ARTICLE, payload: article}
)

module.exports = {
  getAllArticles,
  getArticle
}