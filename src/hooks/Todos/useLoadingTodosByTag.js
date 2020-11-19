import { useEffect, useState, useCallback } from 'react'
import _fetch from '../../api/fetch'
import queryTodos from '../../graphql/fetch-todos-by-tag'
import fetchTodoCount from '../../api/todos/fetch-todo-amount'


export default (page, setError, tag) => {
  const [ totalTodos, setTotalTodos ] = useState(null)
  const [ nextPage, setNextPage ] = useState(false)
  const [ todos, setTodos ] = useState([])
  const [ loadingTodos, setLoadingTodos ] = useState(false)
  
  const loadTodosForTheFirstTime = useCallback(_ => {
    fetchTodoCount(tag)
      .then(res1 => {
        setTotalTodos(res1)          
        if(res1 > 0) {
          return _fetch(queryTodos(1, tag))
            .then(res => {
              setTodos([...res.findTodosByTagname])
              if(res1 > 50) setNextPage(true)
            })
        } else return
      })
      .catch(err => setError(err.message))
      .finally(_ => setLoadingTodos(false))
  }, [ tag, setError ])

  const loadTodos = useCallback(_ => 
    _fetch(queryTodos(page, tag))
      .then(res => {
        setTodos([...todos, ...res.todos])
        if(totalTodos > page * 50) setNextPage(true)
      })
      .catch(err => setError(err.message))
      .finally(_ => setLoadingTodos(false))
  , [ tag, totalTodos, page, setError, todos ])

  useEffect(_ => {
    if(page > 1){
      setLoadingTodos(true)
      loadTodos()
    }
    // eslint-disable-next-line
  }, [ page ])
  
  useEffect(_ => {
    if(page === 1){
      setTotalTodos(null)
      setTodos([])
      setNextPage(false)
      setLoadingTodos(true)
      loadTodosForTheFirstTime()
    }
    // eslint-disable-next-line
  }, [ tag ])

  return [ nextPage, setNextPage, todos, loadingTodos, totalTodos ]
}