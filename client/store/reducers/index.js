
import Article from './reducer.article'
import User from './reducer.user'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  ...User,
  ...Article
})

export default reducers