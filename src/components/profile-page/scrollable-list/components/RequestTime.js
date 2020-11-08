import React from 'react'
import { shortFormatedMonths } from '../../../../utils/months'


export default ({ date }) => {
  let timeString = ''
  const time = new Date(date)
  const now = new Date()
  if(time.getFullYear() !== now.getFullYear()) timeString = `${time.getFullYear()} ${shortFormatedMonths[time.getMonth()]}`
  else if(
    time.getMonth() !== now.getMonth() || 
    time.getDate() !== now.getDate()
  ) timeString = `${shortFormatedMonths[time.getMonth()]} ${time.getDate()}`
  else timeString = `Today at: ${time.getUTCHours()}:${time.getUTCMinutes()}`

  return <p>{timeString}</p>
}