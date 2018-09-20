import { LOGIN, LOGOUT } from '../actionTypes'

// User authentication
const login = () => (
  {type: LOGIN, payload: true}
)

const logout = () => (
  {type: LOGOUT, payload: false}
)

module.exports = {
  login, 
  logout
}