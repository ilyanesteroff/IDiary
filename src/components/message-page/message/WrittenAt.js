import React from 'react'
import addZero from '../../../utils/addZero'


export default ({ time }) => {
  const date = new Date(time)
  
  let formatedTime = `${addZero(date.getUTCHours().toString())}:${addZero(date.getUTCMinutes().toString())}`

  return <span id="WrittenAtMsg">{ formatedTime }</span>
}