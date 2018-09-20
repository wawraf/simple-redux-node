import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: 'Article title'
  },
  text: {
    type: String,
    required: true,
    default: 'Article text'
  },
  author: {
    type: String,
    default: 'Unknown author'
  }
})

// const articlesSchema = new Schema({
//   articles: [articleSchema]
// })

const Articles = module.exports = mongoose.model('Articles',  articleSchema)
