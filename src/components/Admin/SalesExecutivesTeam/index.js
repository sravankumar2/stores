import { Backdrop, Button, Fade, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import '../Inventory/Inventory.css'
import AddExecutiveForm from '../AddExecutiveForm'
import ExecutivesTable from '../ExecutivesTable'

const SalesExecutives = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='inventory-section'>
      <h2>Sales Executives</h2>
      {!open && (
        <Button className='add-btn' onClick={handleOpen}>
          <AddIcon /> Add Sales Executive
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className='form-wrapper'>
            <AddExecutiveForm handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
      <ExecutivesTable />
    </div>
  )
}

export default SalesExecutives
