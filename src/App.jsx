import { useState } from 'react'
import './App.css'
import Login from './Main/Login'
import SignUp from './Main/SignUp'
import {BrowserRouter} from 'react-router-dom'
import AppRouters from './components/Routes'
function App() {

  return (
    <BrowserRouter>
      <AppRouters/>
    </BrowserRouter>
  )
}

export default App
