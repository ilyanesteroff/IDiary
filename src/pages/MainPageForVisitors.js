import React from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import { ViewForVisitors } from '../components/mainsection/Main-Unit'


export default _ => {

  return(
    <>
      <Navbar/>
      <ViewForVisitors/>
      <Footer/>
    </>
  )
}