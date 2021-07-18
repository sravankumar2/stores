import React, { useState } from 'react'
import ExecutiveSidebar from '../ExecutiveSidebar'
import '../../Admin/AdminPanel/AdminPanel.css'
import CreateOrder from '../../CreateOrder'
import OrderHistory from '../../OrderHistory'

const ExecutivePanel = () => {
  //sidebar
  const [uniqueId, setUniqueId] = useState('1')
  const addActive = (id) => setUniqueId(id)
  return (
    <div className='admin-panel'>
      <ExecutiveSidebar uniqueId={uniqueId} addActive={addActive} />
      {uniqueId === '1' && <CreateOrder sales='true' />}
      {uniqueId === '2' && <OrderHistory sales='true' />}
    </div>
  )
}

export default ExecutivePanel
