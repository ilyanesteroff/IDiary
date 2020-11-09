import React, { memo } from 'react'
import Navbar from '../components/navbar/index'
//import Spinner from '../components/spiners/BigSpinner'
//import * as Ctx from '../utils/contexts'


export default memo(_ => {
  document.title = 'Conversations & Messages'
  return(
    <>
      <Navbar/>
    </>
  )
})