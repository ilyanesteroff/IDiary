import React from 'react'
import { shortFormatedMonths } from '../../../utils/months'


export default ({ lastSeen }) => {
  const time = new Date(lastSeen)
  const now = new Date()
  
  let output

  if(time.getFullYear() !== now.getFullYear()) output = `${time.getFullYear()} ${shortFormatedMonths[time.getUTCMonth()]} ${time.getDate()}`
  else if(time.getMonth() !== now.getMonth() || now.getDate() - time.getDate() > 1)
    output = `${shortFormatedMonths[time.getUTCMonth()]} ${time.getDate()}`
  else if(now.getDate() - time.getDate() === 1) output = `Yesterday at ${time.getUTCHours()}:${time.getUTCMinutes()}`
  else if(
    (now.getDate() === time.getDate() && now.getUTCHours() > time.getUTCHours()) ||
    (now.getUTCHours() === time.getUTCHours() && now.getUTCMinutes() - time.getUTCMinutes() > 1)
   ) output = `today at ${time.getUTCHours()}:${time.getUTCMinutes()}` 
  else output = 'online'

  return(
    <h4 id={output === 'online' ? 'green' : ''}>
      {`${output !== 'online'? 'Last seen: ' : ''}${output}`}
    </h4>
  )
}