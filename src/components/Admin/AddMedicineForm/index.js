import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addMedicine,
  updateMedicineDetails,
} from '../../../redux/medicine/actions'
import './AddMedicineForm.css'

const AddMedicineForm = ({ handleClose, updating, editMedicineId }) => {
  //redux
  const dispatch = useDispatch()
  const inventoryList = useSelector((state) => state.medicines.inventoryList)
  const [selectedItem] = inventoryList.filter(
    (item) => editMedicineId === item.medicineId,
  )
  //state
  const [medicineName, setMedicineName] = useState(
    selectedItem ? selectedItem.medicineName : '',
  )
  const [manufacturer, setManufacturer] = useState(
    selectedItem ? selectedItem.manufacturer : '',
  )
  const [price, setPrice] = useState(selectedItem ? selectedItem.price : 0)
  const [stock, setStock] = useState(selectedItem ? selectedItem.stock : 0)
  const [discount, setDiscount] = useState(
    selectedItem ? selectedItem.discount : '',
  )

  const addMedicineToInventory = (e) => {
    e.preventDefault()
    const medicine = {
      medicineId: Date.now(),
      medicineName,
      manufacturer,
      price,
      stock,
      discount,
    }
    dispatch(addMedicine(medicine))
    handleClose()
  }
  const updateDetails = (e) => {
    e.preventDefault()
    const updatedMedicine = {
      medicineId: selectedItem.medicineId,
      manufacturer,
      price,
      stock,
      discount,
    }
    console.log(updatedMedicine)
    dispatch(updateMedicineDetails(updatedMedicine))
    handleClose()
  }

  return (
    <div className='form-container'>
      <h2>Add Medicine Details</h2>
      <span className='closeButton' onClick={handleClose}>
        X
      </span>
      <form>
        <div className='form-input-wrapper'>
          <label htmlFor='medicineName'>Medicine Name</label>
          <input
            type='text'
            id='medicineName'
            placeholder='Medicine name'
            value={medicineName}
            disabled={updating && true}
            autoComplete='off'
            onChange={(e) => {
              setMedicineName(e.target.value)
            }}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='manufacturer'>Manufacturer</label>
          <input
            type='text'
            required
            id='manufacturer'
            placeholder='Manufacturer'
            autoComplete='off'
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            autoComplete='off'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='stock'>Stock</label>
          <input
            type='number'
            id='stock'
            autoComplete='off'
            placeholder='Stock'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='discount'>Discount</label>
          <input
            type='text'
            id='discount'
            placeholder='Discount'
            autoComplete='off'
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <Button
          onClick={(e) => {
            updating ? updateDetails(e) : addMedicineToInventory(e)
          }}
          className='add-to-inventory-btn'
          color='inherit'>
          {updating ? 'Update Details' : 'Add to the Inventory'}
        </Button>
      </form>
    </div>
  )
}

export default AddMedicineForm
