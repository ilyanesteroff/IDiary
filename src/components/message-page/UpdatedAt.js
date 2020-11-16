import React from 'react'
import { shortFormatedMonths } from '../../utils/months'
import addZero from '../../utils/addZero'


export default ({ time }) => {
  const date = new Date(time)
  const now = new Date()
  
  let output

  if(date.getFullYear() !== now.getFullYear()) output = `${date.getFullYear()} ${shortFormatedMonths[date.getUTCMonth()]} ${addZero(date.getDate())}`
  else if(date.getMonth() !== now.getMonth() || now.getDate() - date.getDate() > 1)
    output = `${shortFormatedMonths[date.getUTCMonth()]} ${addZero(date.getDate())}`
  else output = `${addZero(date.getUTCHours().toString())}:${addZero(date.getUTCMinutes().toString())}` 
  
  return(
    <h5 id="updatedAt-conversation">
      { output }
    </h5>
  )
}