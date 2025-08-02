import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Layout