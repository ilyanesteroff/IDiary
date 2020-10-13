import { useRef, useEffect } from 'react'


export default (unset, cb) => {
  const activeTodos = useRef(null)
  const completedTodos = useRef(null)
  const tags = useRef(null)
  const task = useRef(null)
  const date = useRef(null)
  const number = useRef(null)

  useEffect(_ => {
    const event = document.createEvent("UIEvents")
    event.initUIEvent("change", true, true, window, 1)
    activeTodos.current.checked = false
    activeTodos.current.dispatchEvent(event)
    
    completedTodos.current.checked = false
    completedTodos.current.dispatchEvent(event)
    tags.current.value = ''
    tags.current.dispatchEvent(event)
    task.current.value = ''
    task.current.dispatchEvent(event)
    date.current.value = ''
    date.current.dispatchEvent(event)
    number.current.value = 0
    number.current.dispatchEvent(event)
    cb()
  }, [unset])

  return [activeTodos, completedTodos, tags, task, date, number]
}