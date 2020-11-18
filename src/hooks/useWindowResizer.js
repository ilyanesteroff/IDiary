import { useState, useEffect } from 'react'


export default _ => {
  const [ height, setHeight ] = useState(window.innerHeight)
  const [ width, setWidth ] = useState(window.innerWidth)

  useEffect(_ => {
    window.addEventListener('resize', handleResize)
    return _ => window.removeEventListener('resize', handleResize)
  })

  const handleResize = _ => {
    setImmediate(_ => setWidth(window.innerWidth))
    setImmediate(_ => setHeight(window.innerHeight))
  }

  return [ width, height ]
}