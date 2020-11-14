import { useRef, useEffect, useState } from 'react'


export default _ => {
  const [ opened, setOpened ] = useState(false)
  const container = useRef(null)

  useEffect(_ => {
    document.addEventListener('click', handleClickOutside)
    return _ => document.removeEventListener('click', handleClickOutside)
  })

  const handleClickOutside = event => (container.current && !container.current.contains(event.target)) && setOpened(false)
  
  return [ opened, setOpened, container ]
}