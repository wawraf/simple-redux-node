import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../store/reducers/actions'

import Header from '../Presentational/Header'

const mapStateToProps = (state) => (
  {
    loggedIn: state.userIsLogged
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  }
)

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer