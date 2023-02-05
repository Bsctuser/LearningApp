import { useState } from 'react'
import './App.css'
import Login from './Main/Login'
import SignUp from './Main/SignUp'
import {BrowserRouter} from 'react-router-dom'
import Pages from './components/Pages'

function App() {

  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  )
}

export default App
