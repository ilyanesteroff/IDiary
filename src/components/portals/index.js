import { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

export default props => {
  const parent = document.getElementById(props.parent)
  let element = document.createElement('div')
  
  useLayoutEffect(() => {
    parent.appendChild(element)
    document.body.style.overflowY = 'hidden'
    console.log('mounts')
    return _ => {
      parent.removeChild(element)
      document.body.style.overflowY = 'auto'
    }
  })
  
  return ReactDOM.createPortal(
    props.children,
    element
  )
}