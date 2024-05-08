import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import About from './Pages/About'

const App = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default App