import React from 'react'
import { shortFormatedMonths } from '../../utils/months'


export default ({ time }) => {
  const date = new Date(time)
  const now = new Date()
  
  let output

  if(date.getFullYear() !== now.getFullYear()) output = `${date.getFullYear()} ${shortFormatedMonths[date.getUTCMonth()]} ${date.getDate()}`
  else if(date.getMonth() !== now.getMonth() || now.getDate() - date.getDate() > 1)
    output = `${shortFormatedMonths[date.getUTCMonth()]} ${date.getDate()}`
  else if(now.getDate() - date.getDate() === 1) output = `Yesterday at ${date.getUTCHours()}:${date.getUTCMinutes()}`
  else output = `today at ${date.getUTCHours()}:${date.getUTCMinutes()}` 
  
  return(
    <h4>
      { output }
    </h4>
  )
}