import {
  ADD_TO_CART,
  CREATE_ORDER,
  DELETE_ORDER,
  EMPTY_CART,
} from './actionTypes'

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
})
export const emptyCart = () => ({
  type: EMPTY_CART,
})
export const createOrder = (payload) => ({
  type: CREATE_ORDER,
  payload,
})
export const deleteOrder = (payload) => ({
  type: DELETE_ORDER,
  payload,
})
