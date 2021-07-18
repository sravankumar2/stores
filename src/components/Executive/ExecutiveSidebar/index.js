import React from 'react'
import '../../Admin/AdminSidebar/Sidebar.css'
import EditIcon from '@material-ui/icons/Edit'
import LocalMallIcon from '@material-ui/icons/LocalMall'

const ExecutiveSidebar = ({ uniqueId, addActive }) => {
  const sidebarMenuOptions = [
    {
      id: '1',
      menu: 'Create Order',
      icon: <EditIcon />,
    },
    {
      id: '2',
      menu: 'Order History',
      icon: <LocalMallIcon />,
    },
  ]

  return (
    <div className='sidebar' style={{ minWidth: '222px' }}>
      {sidebarMenuOptions.map(({ id, menu, icon }) => (
        <div
          key={id}
          id={id}
          className='sidebarItemWrapper'
          onClick={() => addActive(id)}>
          <span
            className={
              uniqueId === id
                ? `sidebarBorder sidebarActiveBorder`
                : 'sidebarBorder'
            }></span>
          <div
            className={
              uniqueId === id
                ? `menuIconWrapper menuActiveIconWrapper`
                : 'menuIconWrapper'
            }>
            {icon}
            <span className='sidebarItem'>{menu}</span>{' '}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExecutiveSidebar
