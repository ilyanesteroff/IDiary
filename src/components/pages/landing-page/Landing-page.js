import React from 'react'
import Navbar from '../../navbar/Navbar'
import { ViewForVisitors } from '../../mainsection/Main-Unit'

export default ({isAuth}) => {
  return (
    <div>
      <Navbar/>
      {!isAuth &&
        <ViewForVisitors/>
      }
    </div>
  )
}