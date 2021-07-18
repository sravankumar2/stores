import { ADD_USER, REMOVE_USER } from './actionTypes'

const userFromStorage =
  localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user'))
    : null

const initialState = {
  user: userFromStorage,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      localStorage.setItem('user', JSON.stringify(payload))
      return {
        ...state,
        user: payload,
      }

    case REMOVE_USER:
      localStorage.removeItem('user')
      return {
        ...state,
        user: null,
      }

    default:
      return state
  }
}
export default userReducer
