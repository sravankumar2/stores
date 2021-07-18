import {
  ADD_EXECUTIVE,
  DELETE_EXECUTIVE,
  UPDATE_EXECUTIVE,
} from './actionTypes'

export const addExecutive = (payload) => ({
  type: ADD_EXECUTIVE,
  payload,
})
export const updateExecutiveDetails = (payload) => ({
  type: UPDATE_EXECUTIVE,
  payload,
})
export const deleteExecutive = (payload) => ({
  type: DELETE_EXECUTIVE,
  payload,
})
