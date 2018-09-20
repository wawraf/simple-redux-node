const { Articles } = require('../models')

module.exports = (router) => {
  
  /* Authentication */
  const isLogged = (req, res, next) => {
    if (req.isAuthenticated() || process.env.NODE_ENV == 'test') return next()
    res.redirect('/')
  }

  const isLoggedOut = (req, res, next) => {
    if (req.isUnathenticated()) return next()
    res.redirect('/')
  }
  
  router.param('articleID', (req, res, next, id) => {
    Articles.findById(id)
    .then(article => {
      if (!article) {
        const err = new Error('Article does not exist')
        err.status = 404
        return next(err)
      }
      
      res.article = article
      next()
    })
    .catch(err => next(err))
  })
  
  router.get('/articles', isLogged, (req, res, next) => {
    Articles.find()
    .then(articles => {
      if (!articles) return next(new Error('No articles at all!'))
      res.status(200).json(articles)
    })
    .catch(err => next(err))
  })
  
  router.get('/articles/:articleID', isLogged, (req, res) => {
    res.status(200).json(res.article)
  })
  
  // router.get('/article/new', isLogged, (req, res, next) => {
  //   console.log('Creating new article')
  //   const newArticle = new Articles()
  //   newArticle.save()
  //   .then(article => res.status(201).json(article))
  //   .catch(err => next(err))
  // })
  
}