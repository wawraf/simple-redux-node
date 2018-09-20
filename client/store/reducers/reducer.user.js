import { LOGIN, LOGOUT } from './actionTypes'

const userIsLogged = (isLogged = false, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload
    case LOGOUT:
      return action.payload
    default:
      return isLogged
  }
}

const reducer = { userIsLogged }

export default reducer