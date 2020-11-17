import React, { useEffect } from 'react'
import App from './SubApp'
import { SignalContext } from './utils/contexts'


export default _ => {
  const abortController = new AbortController()

  useEffect(_ => {
    return _ =>  abortController.abort()
  })

  return(
    <SignalContext.Provider value={abortController.signal}>
      <App signal={ abortController.signal }/>
    </SignalContext.Provider>
  )
}