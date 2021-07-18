import {
  ADD_TO_CART,
  CREATE_ORDER,
  DELETE_ORDER,
  EMPTY_CART,
} from './actionTypes'

const ordersFromStorage =
  localStorage.getItem('ordersList') !== null
    ? JSON.parse(localStorage.getItem('ordersList'))
    : []
const cartFromStorage =
  localStorage.getItem('cart') !== null
    ? JSON.parse(localStorage.getItem('cart'))
    : []

const initialState = {
  ordersList: ordersFromStorage,
  cart: cartFromStorage,
}

const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      localStorage.setItem('cart', JSON.stringify([...state.cart, payload]))

      return {
        ...state,
        cart: [...state.cart, payload],
      }

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      }
    case CREATE_ORDER:
      localStorage.setItem(
        'ordersList',
        JSON.stringify([...state.ordersList, payload]),
      )
      localStorage.setItem('cart', JSON.stringify([]))
      return {
        ...state,
        cart: [],
        ordersList: [...state.ordersList, payload],
      }
    case DELETE_ORDER:
      const filteredOrders = state.ordersList.filter(
        ({ orderId }) => orderId !== payload,
      )
      localStorage.setItem('ordersList', JSON.stringify(filteredOrders))
      return {
        ...state,
        ordersList: filteredOrders,
      }
    default:
      return state
  }
}
export default ordersReducer
