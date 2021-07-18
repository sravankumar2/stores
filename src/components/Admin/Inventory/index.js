import { Backdrop, Button, Fade, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import AddMedicineForm from '../AddMedicineForm'
import MedicineTable from '../MedicineTable'
import './Inventory.css'

const Inventory = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='inventory-section'>
      <h2>Inventory</h2>
      {!open && (
        <Button className='add-btn' onClick={handleOpen}>
          <AddIcon /> Add new Medicine
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
            <AddMedicineForm handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
      <MedicineTable />
    </div>
  )
}

export default Inventory
