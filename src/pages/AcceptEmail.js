import React, { useContext, useRef, useState, useEffect, memo } from 'react'
import { tokenFromUrl as token } from '../utils/tokens'
import { AcceptEmailContext } from '../utils/contexts'
import PageNotFound from './Page-not-found'
import Spinner from '../components/spiners/BigSpinner'


export default memo(_ => {
  const AcceptEmail = _ => useContext(AcceptEmailContext)
  const [ checked, setChecked ] = useState(false)
  const [ valid, setValid ] = useState(false)

  const acceptEmail = useRef(AcceptEmail())
  
  useEffect(_ => {
    acceptEmail.current(token, _ => {
      setChecked(true)
      setValid(false)
    })
  }, [])  

  return (
    <>
      {checked && !valid &&
        <PageNotFound/>
      }
     {!checked && <Spinner/>}
    </>
  )
})