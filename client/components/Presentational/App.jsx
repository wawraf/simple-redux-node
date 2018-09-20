import React from 'react'
// import { connect } from 'react-redux'

// import modules
import HeaderContainer from '../Container/HeaderContainer'
import Home from './Main'
import Footer from './Footer'

/* the main page for the index route of this app */
const App = () => {
  return (
    <div className='app'>
      <HeaderContainer />
      <Home />
      <Footer />
    </div>
  )
}

export default App