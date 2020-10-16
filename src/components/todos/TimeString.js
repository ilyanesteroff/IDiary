import React from 'react'
import { shortFormatedMonths } from '../../utils/months'

export default ({time}) => {
  const date = `${time.getUTCDate()} ${shortFormatedMonths[time.getMonth()]}`
  return <p id="time">{`${time.getUTCDate() === new Date().getUTCDate() ? 'Today' : date} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</p>
}