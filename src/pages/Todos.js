import React, { useState, useEffect, useContext, useRef, memo } from 'react'
import Navbar from '../components/navbar/index'
import Spinner from '../components/spiners/BigSpinner'
import AddTodoBtn from '../components/todos/AddTodoBtn'
import { TokenContext, BrightThemeContext, ErrorContext } from '../utils/contexts'
import useTodoLoader from '../hooks/useTodoLoader'
import Todos from '../components/todos/Todos'


export default memo(_ => {
  document.title = 'TooDooDoo - Your Todos'
  const [page, setPage] = useState(1)
  const Token = _ => useContext(TokenContext)
  const Error = _ => useContext(ErrorContext)
  const token = useRef(Token())
  const setError = useRef(Error().setError)
  const [fullfilledTodos, activeTodos, nextPage, setNextPage, todos, loading] = useTodoLoader(token.current, page, setError.current)

  const definePosition = _ => {
    if((window.innerHeight + window.pageYOffset + 10) >= document.body.offsetHeight && nextPage) {
      setPage(page + 1)
      setNextPage(false)
    }
  }

  useEffect(_ => {
    window.addEventListener('scroll', definePosition)
    return _ => window.removeEventListener('scroll', definePosition)
  })

  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme =>
          <div id="TodosPage" className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <h1>Your Todos</h1>
            {fullfilledTodos === 0 && activeTodos === 0 &&
              <h3>It seems like you have no todos yet</h3>
            }
            {todos.length > 0 &&
              <Todos
                theme={theme}
                todos={todos}
                activeTodos={activeTodos}
                fullfilledTodos={fullfilledTodos}
              />
            } 
            {loading && <Spinner/>}
            <AddTodoBtn clickHandler/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
})