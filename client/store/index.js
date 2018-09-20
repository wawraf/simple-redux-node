import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, window.STATE_FROM_SERVER)

console.log('New store:')
console.log(store.getState())

export default store