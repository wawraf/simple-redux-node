import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ loggedIn, login, logout }) => {
  const loginBtn = {
    text: loggedIn ? 'Logout' : 'Login',
    callback: loggedIn ? logout : login
  }
  
  return (
    <div className='header'>
      <div className='header-title'>
        <h1>Header</h1>
      </div>
      <a href='/auth/github' onClick={e => {loginBtn.callback()}}>{loginBtn.text}</a>
      <br/>
      <a href="/auth/github" className="btn btn-default">Github</a>
    </div>
  )
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default Header