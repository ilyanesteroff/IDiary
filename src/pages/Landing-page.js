import React, {memo} from 'react'
import Navbar from '../components/navbar/index'
import { ViewForVisitors } from '../components/mainsection/Main-Unit'

export default memo(({isAuth}) => {
  return (
    <>
      <Navbar/>
      {!isAuth &&
        <ViewForVisitors/>
      }
    </>
  )
})