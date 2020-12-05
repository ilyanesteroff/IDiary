import { useEffect, useState } from 'react'


export default () => {
  const [ submitting, setSubmitting ] = useState(false)
  const [ className, setClassName ] = useState('')

  useEffect(_ => {
    submitting
      ? setClassName('FormWithSpinner')
      : setClassName('')
  }, [ submitting ])

  return [ setSubmitting, className ]
}