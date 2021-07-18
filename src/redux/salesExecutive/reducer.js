import {
  ADD_EXECUTIVE,
  DELETE_EXECUTIVE,
  UPDATE_EXECUTIVE,
} from './actionTypes'

const executiveListFromStorage =
  localStorage.getItem('executiveList') !== null
    ? JSON.parse(localStorage.getItem('executiveList'))
    : []

const initialState = {
  executiveList: executiveListFromStorage,
}

const executiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXECUTIVE:
      localStorage.setItem(
        'executiveList',
        JSON.stringify([...state.executiveList, payload]),
      )

      return {
        ...state,
        executiveList: [...state.executiveList, payload],
      }
    case UPDATE_EXECUTIVE:
      console.log(payload)
      const [selectedItem] = state.executiveList.filter(
        (item) => payload.execId === item.execId,
      )
      console.log(selectedItem)
      selectedItem.firstName = payload.firstName
      selectedItem.lastName = payload.lastName
      selectedItem.dob = payload.dob
      selectedItem.gender = payload.gender
      selectedItem.experience = payload.experience
      console.log(selectedItem)

      console.log([...state.executiveList])
      localStorage.setItem(
        'executiveList',
        JSON.stringify([...state.executiveList]),
      )

      return {
        ...state,
        executiveList: [...state.executiveList],
      }

    case DELETE_EXECUTIVE:
      const filteredExecutivesList = state.executiveList.filter(
        (item) => item.execId !== payload,
      )
      localStorage.setItem(
        'executiveList',
        JSON.stringify(filteredExecutivesList),
      )

      return {
        ...state,
        executiveList: filteredExecutivesList,
      }
    default:
      return state
  }
}
export default executiveReducer
