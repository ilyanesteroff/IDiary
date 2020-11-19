import _fetch from '../api/fetch'
import queryTodos from '../graphql/find-todos-for-user'
import fetchTodoStats from '../api/todos/fetch-todo-stats'


export default (fullfilledTodos, activeTodos, userId, page, setNextPage, setActiveTodos, setFullfilledTodos, setLoadingTodos, setError, setTodos) => 
  !fullfilledTodos && !activeTodos
    ? fetchTodoStats(userId)
        .then(res1 => {
          setActiveTodos(res1.data.user.ActiveTodos)
          setFullfilledTodos(res1.data.user.FullfilledTodos)          
          if(res1.data.user.FullfilledTodos + res1.data.user.ActiveTodos !== 0) {
            return _fetch(queryTodos(page, userId))
              .then(res => {
                setTodos([...res.todos])
                if(res1.data.user.FullfilledTodos + res1.data.user.ActiveTodos > res.todos.length) setNextPage(true)
              })
              .catch(err => {
                setError(err.message)
              })
              .finally(_ => setLoadingTodos(false))
          } else {
            setLoadingTodos(false)
          }
        })
        .catch(err => setError(err.message))
    : _fetch(queryTodos(page, userId))
        .then(res => {
          setTodos([...todos, ...res.todos])
          if(fullfilledTodos + activeTodos > todos.length + res.todos.length) setNextPage(true)
        })
        .catch(err => setError(err.message))
        .finally(_ => setLoadingTodos(false))
