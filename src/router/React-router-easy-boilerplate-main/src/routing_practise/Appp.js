import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar"
import Routes from "./Routes"

const Appp = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes />
    </BrowserRouter>
  )
}

export default Appp
