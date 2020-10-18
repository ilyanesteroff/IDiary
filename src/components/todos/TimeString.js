import React from 'react'
import { shortFormatedMonths } from '../../utils/months'

export default ({time}) => {
  const date = `${time.getUTCDate()} ${shortFormatedMonths[time.getMonth()]}`
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  return <p id="time">{`${time.getUTCDate() === new Date().getUTCDate()?'Today':date} at ${hours>9?hours:'0'+hours}:${minutes>9?minutes:'0'+minutes}:${seconds>9?seconds:'0'+seconds}`}</p>
}