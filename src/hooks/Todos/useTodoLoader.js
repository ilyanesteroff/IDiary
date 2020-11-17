import { useEffect, useState, useCallback } from 'react'
import _fetch from '../../api/fetch'
import queryTodos from '../../graphql/find-todos-for-user'
import fetchTodoStats from '../../api/todos/fetch-todo-stats'


export default (page, setError, userId) => {
  const [ fullfilledTodos, setFullfilledTodos ] = useState(null)
  const [ activeTodos, setActiveTodos ] = useState(null)
  const [ nextPage, setNextPage ] = useState(false)
  const [ todos, setTodos ] = useState([])
  const [ loadingTodos, setLoadingTodos ] = useState(false)
  
  
  const loadTodos = useCallback(_ => 
    !fullfilledTodos && !activeTodos
      ? fetchTodoStats(userId)
          .then(res1 => {
            setActiveTodos(res1.data.user.ActiveTodos)
            setFullfilledTodos(res1.data.user.FullfilledTodos)          
            if(res1.data.user.FullfilledTodos + res1.data.user.ActiveTodos !== 0) {
              return _fetch(queryTodos(page, userId))
                .then(res => {
                  setLoadingTodos(false)
                  setTodos([...res.todos])
                  if(res1.data.user.FullfilledTodos + res1.data.user.ActiveTodos > res.todos.length) setNextPage(true)
                })
                .catch(err => {
                  setLoadingTodos(false)
                  setError(err.message)
                })
            } else {
              setLoadingTodos(false)
            }
          })
          .catch(err => setError(err.message))
      : _fetch(queryTodos(page, userId))
          .then(res => {
            setLoadingTodos(false) 
            setTodos([...todos, ...res.todos])
            if(fullfilledTodos + activeTodos > todos.length + res.todos.length) setNextPage(true)
          })
          .catch(err => setError(err.message))
  , [ userId, activeTodos, fullfilledTodos, page, setError, todos ])

  useEffect(_ => {
    setLoadingTodos(true)
    loadTodos()
    // eslint-disable-next-line
  }, [ page ])

  return [fullfilledTodos, activeTodos, nextPage, setNextPage, todos, loadingTodos]
}