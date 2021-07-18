import React from 'react'
import './Sidebar.css'
import PeopleIcon from '@material-ui/icons/People'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import EditIcon from '@material-ui/icons/Edit'

const Sidebar = ({ uniqueId, addActive }) => {
  const sidebarMenuOptions = [
    {
      id: '1',
      menu: 'Inventory',
      icon: <LocalMallIcon />,
    },
    {
      id: '2',
      menu: 'Sales Executives',
      icon: <PeopleIcon />,
    },

    {
      id: '3',
      menu: 'Create Order',
      icon: <EditIcon />,
    },
    {
      id: '4',
      menu: 'Orders',
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

export default Sidebar
