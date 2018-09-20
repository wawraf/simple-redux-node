const React = require('react')
const ReactDOM = require('react-dom')
const style = require('./styles/app')

import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

/* Import Components */
import App from './components/Presentational/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

//registerServiceWorker()