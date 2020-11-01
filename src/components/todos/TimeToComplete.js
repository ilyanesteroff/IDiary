import React, { useState, useEffect, useRef, useLayoutEffect} from 'react'
import convertNumberToHRTime from '../../utils/convertNumberToHumanReadableTime'


export default ({timeToComplete, createdAt, setIncompleted}) => {
  const [timeLeft, setTimeLeft] = useState('')

  const handleTimeChange = _ => { 
    const now = new Date().getTime()
    const shouldBeCompletedAt = createdAt + timeToComplete
    const timeInSeconds = Math.floor((shouldBeCompletedAt - now) / 1000)
    if(timeInSeconds > 1) setTimeLeft(convertNumberToHRTime(timeInSeconds))
    else {
      setTimeLeft('1 second')
      setTimeout(_ => setIncompleted(), 900)
    }
  }

  const intervalRef = useRef()

  useLayoutEffect(_ => {
    handleTimeChange()
  })

  useEffect(_ => {
    const interval = setInterval(handleTimeChange, 1000)
    intervalRef.current = interval
    return _ => clearInterval(intervalRef.current)
  })

  return <p id="TimeLeft">{timeLeft}</p>
}