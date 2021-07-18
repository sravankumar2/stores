import { ADD_MEDICINE, DELETE_MEDICINE, UPDATE_MEDICINE } from './actionTypes'

const inventoryListFromStorage =
  localStorage.getItem('inventoryList') !== null
    ? JSON.parse(localStorage.getItem('inventoryList'))
    : []

const initialState = {
  inventoryList: inventoryListFromStorage,
}

const medicineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MEDICINE:
      localStorage.setItem(
        'inventoryList',
        JSON.stringify([...state.inventoryList, payload]),
      )

      return {
        ...state,
        inventoryList: [...state.inventoryList, payload],
      }
    case UPDATE_MEDICINE:
      console.log(payload)
      const [selectedItem] = state.inventoryList.filter(
        (item) => payload.medicineId === item.medicineId,
      )
      console.log(selectedItem)
      selectedItem.manufacturer = payload.manufacturer
      selectedItem.price = payload.price
      selectedItem.stock = payload.stock
      selectedItem.discount = payload.discount

      console.log([...state.inventoryList])
      localStorage.setItem(
        'inventoryList',
        JSON.stringify([...state.inventoryList]),
      )

      return {
        ...state,
        inventoryList: [...state.inventoryList],
      }

    case DELETE_MEDICINE:
      const filteredInventoryList = state.inventoryList.filter(
        (item) => item.medicineId !== payload,
      )
      localStorage.setItem(
        'inventoryList',
        JSON.stringify(filteredInventoryList),
      )

      return {
        ...state,
        inventoryList: filteredInventoryList,
      }
    default:
      return state
  }
}
export default medicineReducer
