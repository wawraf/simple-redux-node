import { LOGIN, LOGOUT } from '../actionTypes'
import axios from 'axios'

// User authentication
const login = () => (
  {type: LOGIN, payload: true}
)

const logout = () => (
  {type: LOGOUT, payload: false}
)

// const login = () => (dispatch) => {
//     axios
//     .post('/auth/github')
//     .then(res => dispatch(_login()))
//     .catch(err => {console.log(err)})
//   }

export { 
  login, 
  logout
}