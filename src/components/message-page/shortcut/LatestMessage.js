import React, { useState, useEffect } from 'react'
import useWindowResizer from '../../../hooks/useWindowResizer'


export default ({ message, unseenMsgs }) => {
  const [ width ] = useWindowResizer()

  const [ limit, setLimit ] = useState(width)

  useEffect(_ => {
    if(width < 540) setLimit(Math.floor(width / 10))
    else if(width > 540 && width < 1400) setLimit(Math.floor(width / 8))
    else setLimit(Math.floor(width / 62))
  }, [ width ])

  return(
    <p id="latestMsg" className={`${unseenMsgs ? 'unseen' : 'normal'}`}>
      { message.text.length > limit 
          ? `${message.text.substr(0, limit)}...`
          : message.text 
      }
    </p>
  )
}