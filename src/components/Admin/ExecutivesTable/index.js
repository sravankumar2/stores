import React, { useState } from 'react'
import '../MedicineTable/MedicineTable.css'
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
import AddExecutiveForm from '../AddExecutiveForm'
import { deleteExecutive } from '../../../redux/salesExecutive/actions'

const ExecutivesTable = () => {
  const [open, setOpen] = React.useState(false)
  const [editExecId, setEditExecId] = useState(null)

  //redux
  const dispatch = useDispatch()
  const executiveList = useSelector((state) => state.executives.executiveList)

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
              <TableCell align='center'>First Name</TableCell>
              <TableCell align='center'>Last Name</TableCell>
              <TableCell align='center'>DOB</TableCell>
              <TableCell align='center'>Gender</TableCell>
              <TableCell align='center'>Experience(in Years)</TableCell>
              <TableCell align='center'></TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {executiveList.map(
              ({ execId, firstName, lastName, dob, gender, experience }) => (
                <TableRow key={execId}>
                  <TableCell align='center' scope='row'>
                    {firstName}
                  </TableCell>
                  <TableCell align='center'>{lastName}</TableCell>
                  <TableCell align='center'>
                    {new Date(dob).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </TableCell>
                  <TableCell align='center'>{gender}</TableCell>
                  <TableCell align='center'>{experience}</TableCell>
                  <TableCell align='center'>
                    <IconButton
                      onClick={() => {
                        handleOpen()
                        setEditExecId(execId)
                      }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton
                      onClick={() => dispatch(deleteExecutive(execId))}>
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
            <AddExecutiveForm
              updating='updating'
              editExecId={editExecId}
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default ExecutivesTable
