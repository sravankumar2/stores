import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addExecutive,
  updateExecutiveDetails,
} from '../../../redux/salesExecutive/actions'

import '../AddMedicineForm/AddMedicineForm.css'

const AddExecutiveForm = ({ handleClose, updating, editExecId }) => {
  //redux
  const dispatch = useDispatch()
  const executiveList = useSelector((state) => state.executives.executiveList)
  const [selectedExec] = executiveList.filter(
    (item) => editExecId === item.execId,
  )

  //Local state
  const [firstName, setFirstName] = useState(
    selectedExec ? selectedExec.firstName : '',
  )
  const [lastName, setLastName] = useState(
    selectedExec ? selectedExec.lastName : '',
  )
  const [dob, setDob] = useState(selectedExec ? selectedExec.dob : Date.now())
  const [gender, setGender] = useState(selectedExec ? selectedExec.gender : '')
  const [experience, setExperience] = useState(
    selectedExec ? selectedExec.experience : 0,
  )

  const addExecutiveToTeam = (e) => {
    e.preventDefault()
    const executiveDetails = {
      execId: Date.now(),
      firstName,
      lastName,
      dob,
      gender,
      experience,
    }
    dispatch(addExecutive(executiveDetails))
    handleClose()
  }
  const updateExecDetails = (e) => {
    e.preventDefault()
    const updateExecDetails = {
      execId: selectedExec.execId,
      firstName,
      lastName,
      dob,
      gender,
      experience,
    }
    dispatch(updateExecutiveDetails(updateExecDetails))
    handleClose()
  }

  return (
    <div className='form-container'>
      <h2>Add Executive Details</h2>
      <span className='closeButton' onClick={handleClose}>
        X
      </span>
      <form>
        <div className='form-input-wrapper'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            placeholder='First Name'
            autoComplete='off'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            required
            id='lastName'
            autoComplete='off'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='dob'>DOB</label>
          <input
            type='date'
            id='dob'
            style={{ width: '192px' }}
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='gender'>Gender(M/F/O)</label>
          <input
            type='text'
            id='gender'
            autoComplete='off'
            placeholder='Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className='form-input-wrapper'>
          <label htmlFor='experience'>Experience</label>
          <input
            type='number'
            id='experience'
            placeholder='Experience'
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <Button
          onClick={(e) => {
            updating ? updateExecDetails(e) : addExecutiveToTeam(e)
          }}
          className='add-to-inventory-btn'
          color='inherit'>
          {updating ? 'Update Details' : 'Add to the Team'}
        </Button>
      </form>
    </div>
  )
}

export default AddExecutiveForm
