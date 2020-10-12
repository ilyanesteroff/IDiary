import React from 'react'
import { shortFormatedMonths } from '../../utils/months'

export default ({time}) => (
  <p>{`${time.getUTCDate()} ${shortFormatedMonths[time.getMonth()]} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</p>
)