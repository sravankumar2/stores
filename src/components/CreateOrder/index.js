import React, { useState } from 'react'
import { Button, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDispatch, useSelector } from 'react-redux'
import './CreateOrder.css'
import { addToCart, createOrder, emptyCart } from '../../redux/order/actions'
const CreateOrder = ({ sales }) => {
  //Redux
  const inventoryList = useSelector((state) => state.medicines.inventoryList)
  const cart = useSelector((state) => state.orders.cart)

  const dispatch = useDispatch()

  //Local State
  const [medicineToBeAdded, setMedicineName] = useState('')
  const [qty, setQty] = useState(0)
  const [customerName, setCustomerName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')

  //Add Medicine to cart
  const addMedToCart = (e) => {
    e.preventDefault()
    if (qty === 0) alert('Please add quantity!')
    const [medicineIncart] = inventoryList.filter(
      (item) => item.medicineName === medicineToBeAdded,
    )
    const cartItem = {
      id: medicineIncart.medicineId,
      medicineName: medicineToBeAdded,
      qty,
      price: medicineIncart.price,
    }
    dispatch(addToCart(cartItem))
    setQty(0)
  }

  //Create an order
  const createMedOrder = (e) => {
    e.preventDefault()
    const orderDetails = {
      orderId: Math.floor(Math.random() * 100000000 + 1),
      customerName,
      phoneNum,
      cart,
      totalAmount: cart?.reduce((acc, { price, qty }) => acc + price * qty, 0),
      isSales: sales === 'true' ? true : false,
    }
    dispatch(createOrder(orderDetails))
    dispatch(emptyCart())
    setCustomerName('')
    setPhoneNum('')
  }

  return (
    <div className='creat-order-section'>
      <h2>Create Order</h2>
      <div className='forms-wrapper'>
        <form className='add-to-cart-form'>
          <div>
            {' '}
            <label htmlFor='medicine'>Medicine</label>
            <input
              list='medicines'
              onChange={(e) => setMedicineName(e.target.value)}
              onFocus={(e) => (e.target.value = '')}
              name='medicine'
              id='medicine'
              placeholder='Medicine Name'
              autoComplete='off'
            />
            <datalist id='medicines'>
              {inventoryList &&
                inventoryList.map(({ medicineId, medicineName }) => (
                  <option key={medicineId} value={medicineName} />
                ))}
            </datalist>
          </div>
          <input
            className='qty-input'
            type='number'
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder='Qty'
          />
          <IconButton className='add-to-cart-icon' onClick={addMedToCart}>
            <AddCircleIcon />
          </IconButton>
        </form>
        <form className='create-order-form'>
          <div className='form-input-wrapper'>
            <label htmlFor='medicine'>Customer Name</label>
            <input
              type='text'
              value={customerName}
              autoComplete='off'
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder='Customer Name'
            />
          </div>
          <div className='form-input-wrapper'>
            <label htmlFor='medicine'>Customer Contact Number</label>
            <input
              type='text'
              value={phoneNum}
              autoComplete='off'
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder='Contact Number'
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Qty</th>
                <th>Price(per Unit)</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map(({ id, medicineName, qty, price }) => (
                  <tr key={id}>
                    <td>{medicineName}</td>
                    <td>{qty}</td>
                    <td>{price}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr className='total-row'>
                <th colSpan='2'>Total</th>
                <th>
                  {cart?.reduce((acc, { price, qty }) => acc + price * qty, 0)}
                </th>
              </tr>
            </tfoot>
          </table>
          <Button onClick={createMedOrder} className='create-order-btn'>
            Create Order
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateOrder
