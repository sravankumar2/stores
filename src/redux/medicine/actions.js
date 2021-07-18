import { ADD_MEDICINE, DELETE_MEDICINE, UPDATE_MEDICINE } from './actionTypes'

export const addMedicine = (payload) => ({
  type: ADD_MEDICINE,
  payload,
})
export const updateMedicineDetails = (payload) => ({
  type: UPDATE_MEDICINE,
  payload,
})
export const deleteMedicine = (payload) => ({
  type: DELETE_MEDICINE,
  payload,
})
