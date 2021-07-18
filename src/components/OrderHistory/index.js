import { IconButton } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { useDispatch, useSelector } from 'react-redux'
import './OrderHistory.css'
import { deleteOrder } from '../../redux/order/actions'

const OrderHistory = ({ sales }) => {
  //redux
  const ordersList = useSelector((state) => state.orders.ordersList)
  const ordersToBeDisplay =
    sales === 'true'
      ? ordersList.filter(({ isSales }) => isSales === true)
      : ordersList
  const dispatch = useDispatch()

  return (
    <>
      <div className='order-history-section'>
        <h2>Orders History</h2>
        {ordersToBeDisplay?.map(
          ({ orderId, customerName, phoneNum, cart, totalAmount }) => (
            <div className='orders-wrapper'>
              <div className='order-item'>
                <div className='cust-details'>
                  <h3>
                    Customer Name: <span>{customerName}</span>
                  </h3>
                  <h3>
                    Contact Number: <span>{phoneNum}</span>
                  </h3>
                  <h3>
                    OrderId: <span>{orderId}</span>
                  </h3>
                  <IconButton onClick={() => dispatch(deleteOrder(orderId))}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <table className='orders-list'>
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.map(({ id, medicineName, qty }) => (
                        <tr key={id}>
                          <td>{medicineName}</td>
                          <td>{qty}</td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <th>Total</th>
                    <th>{totalAmount}</th>
                  </tfoot>
                </table>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  )
}

export default OrderHistory
