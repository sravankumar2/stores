import React, { useState } from 'react'
import './MedicineTable.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { Backdrop, Fade, IconButton, Modal } from '@material-ui/core'
import AddMedicineForm from '../AddMedicineForm'
import { deleteMedicine } from '../../../redux/medicine/actions'

const MedicineTable = () => {
  const [open, setOpen] = React.useState(false)
  const [editMedicineId, setEditMedicineId] = useState(null)

  //redux
  const dispatch = useDispatch()
  const inventoryList = useSelector((state) => state.medicines.inventoryList)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <TableContainer className='table-container' component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Medicine Name</TableCell>
              <TableCell align='center'>Manufacturer</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Stock</TableCell>
              <TableCell align='center'>Discount(%)</TableCell>
              <TableCell align='center'></TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventoryList.map(
              ({
                medicineId,
                medicineName,
                manufacturer,
                price,
                stock,
                discount,
              }) => (
                <TableRow key={medicineId}>
                  <TableCell align='center' scope='row'>
                    {medicineName}
                  </TableCell>
                  <TableCell align='center'>{manufacturer}</TableCell>
                  <TableCell align='center'>{price}</TableCell>
                  <TableCell align='center'>{stock}</TableCell>
                  <TableCell align='center'>{discount}</TableCell>
                  <TableCell align='center'>
                    <IconButton
                      onClick={() => {
                        handleOpen()
                        setEditMedicineId(medicineId)
                      }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton
                      onClick={() => dispatch(deleteMedicine(medicineId))}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
            <AddMedicineForm
              updating='updating'
              editMedicineId={editMedicineId}
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default MedicineTable
