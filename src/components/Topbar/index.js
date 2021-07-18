import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LocalPharmacyRoundedIcon from '@material-ui/icons/LocalPharmacyRounded'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './Topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/user/actions'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const Topbar = () => {
  const classes = useStyles()

  //Local state
  const [redirect, setRedirect] = useState(false)

  //redux
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  console.log(user)

  return (
    <div className={classes.root}>
      <AppBar position='static' className='topbar'>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <LocalPharmacyRoundedIcon />
          </Typography>
          {user !== null ? (
            <Button
              onClick={() => {
                dispatch(userLogout())
                setRedirect(true)
              }}>
              Logout
            </Button>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
      {redirect && <Redirect to='/' />}
    </div>
  )
}

export default Topbar
