import { ADD_USER, REMOVE_USER } from './actionTypes'

export const userLogin = (payload) => ({
  type: ADD_USER,
  payload,
})
export const userLogout = () => ({
  type: REMOVE_USER,
})
