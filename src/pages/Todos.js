import React, { useState, useEffect, useContext, useRef, memo } from 'react'
import Navbar from '../components/navbar/index'
import Spinner from '../components/spiners/BigSpinner'
import AddTodoBtn from '../components/todos/AddTodoBtn'
import { TokenContext, BrightThemeContext, ErrorContext, YourTodoContext } from '../utils/contexts'
import useTodoLoader from '../hooks/useTodoLoader'
import Todos from '../components/todos/Todos'
import CreateTodoModal from '../components/todos/AddTodoModal'

export default memo(_ => {
  document.title = 'MyDiary - Your Todos'
  const [page, setPage] = useState(1)
  const [addTodoModalOpened, setAddTodoModalOpened] = useState(false)
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
              <YourTodoContext.Provider value={true}>
                <Todos
                  todos={todos}
                  activeTodos={activeTodos}
                  fullfilledTodos={fullfilledTodos}
                />
              </YourTodoContext.Provider>
            } 
            {loading && <Spinner/>}
            {addTodoModalOpened && <CreateTodoModal/>}
            <AddTodoBtn clickHandler={_ => setAddTodoModalOpened(true)}/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
})