import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminPanel from './components/Admin/AdminPanel'
import Login from './components/Login'
import Topbar from './components/Topbar'
import ExecutivePanel from './components/Executive/ExecutivePanel'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.user)
  console.log(user)
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        {user === null && <Route path='/' component={Login} />}
        {user?.username === 'test-admin' && (
          <Route path='/' component={AdminPanel} />
        )}
        {user?.username === 'test-sales' && (
          <Route path='/' component={ExecutivePanel} />
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default App
