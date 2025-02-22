/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import Header from '../UI/header'
import Footer from '../UI/footer'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout
