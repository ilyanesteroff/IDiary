import React, { useLayoutEffect } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import Page from '../components/MainPageForVisitors'


export default _ => {
  useLayoutEffect(_ => window.scrollTo(0, 0), [ ])

  return(
    <>
      <Navbar/>
      <Page/>
      <Footer/>
    </>
  )
}