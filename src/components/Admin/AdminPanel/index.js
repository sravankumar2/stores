import React, { useState } from 'react'
import Inventory from '../Inventory'
import Sidebar from '../AdminSidebar'
import './AdminPanel.css'
import SalesExecutivesTeam from '../SalesExecutivesTeam'
import OrderHistory from '../../OrderHistory'
import CreateOrder from '../../CreateOrder'

const AdminPanel = () => {
  //sidebar
  const [uniqueId, setUniqueId] = useState('1')
  const addActive = (id) => setUniqueId(id)
  return (
    <div className='admin-panel'>
      <Sidebar uniqueId={uniqueId} addActive={addActive} />
      {uniqueId === '1' && <Inventory />}
      {uniqueId === '2' && <SalesExecutivesTeam />}
      {uniqueId === '3' && <CreateOrder />}
      {uniqueId === '4' && <OrderHistory />}
    </div>
  )
}

export default AdminPanel
