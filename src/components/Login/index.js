import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLogin } from '../../redux/user/actions'
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isSales, setIsSales] = useState(false)

  //redux
  const userFromStore = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userFromStore !== null) {
      if (userFromStore.username === 'test-admin') {
        setRedirect(true)
        setIsAdmin(true)
      }
      if (userFromStore.username === 'test-sales') {
        setRedirect(true)
        setIsSales(true)
      }
    }
  }, [userFromStore])

  const submitForm = (e) => {
    e.preventDefault()
    if (username === 'test-admin') setIsAdmin(true)
    if (username === 'test-sales') setIsSales(true)
    const user = {
      username,
      password,
    }
    dispatch(userLogin(user))
    setRedirect(true)
    setUsername('')
    setPassword('')
  }

  return (
    <div className='formWrapper'>
      <h1 className='heading'>Login</h1>
      <form className='form'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Login' onClick={submitForm} />
      </form>
      {redirect && isAdmin && <Redirect to='/admin' />}
      {redirect && isSales && <Redirect to='/sales' />}
    </div>
  )
}

export default Login
