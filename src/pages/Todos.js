import React, { useState, useEffect, useContext, useRef } from 'react'
import Navbar from '../components/navbar/index'
import Spinner from '../components/spiners/BigSpinner'
import AddTodoBtn from '../components/todos/AddTodoBtn'
import * as Ctx from '../utils/contexts'
import useTodoLoader from '../hooks/Todos/useTodoLoader'
import useTodoManipulator from '../hooks/Todos/useTodoManipulator'
import Todos from '../components/todos/Todos'
import CreateTodoModal from '../components/todos/AddTodoModal'


export default _ => {
  document.title = 'MyDiary - Your Todos'
  const [page, setPage] = useState(1)
  const [addTodoModalOpened, setAddTodoModalOpened] = useState(false)
  const Token = _ => useContext(Ctx.TokenContext)
  const Error = _ => useContext(Ctx.ErrorContext)
  const token = useRef(Token())
  const setError = useRef(Error().setError)
  
  const [fullfilledTodos, activeTodos, nextPage, setNextPage, todos, loading] = useTodoLoader(token.current, page, setError.current)
  
  const [sortedTodos, setNewTodo, setTodoToDelete, active, completed] = useTodoManipulator(todos, activeTodos, fullfilledTodos)
  
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
      <Ctx.BrightThemeContext.Consumer>
        {theme =>
          <Ctx.TodoStatsContext.Provider value={{active: active, completed: completed}}>
            <div id="TodosPage" className={`${theme? 'Bright' : 'Dark'}Page Page`}>
              <h1>Your Todos</h1>
              {completed === 0 && active === 0 &&
                <h3>It seems like you have no todos yet</h3>
              }
              {sortedTodos.length > 0 &&
                <Ctx.YourTodoContext.Provider value={true}>
                  <Ctx.SetTodoToDeleteContext.Provider value={todoId => setTodoToDelete(todoId)}>
                    <Todos todos={sortedTodos}/>
                  </Ctx.SetTodoToDeleteContext.Provider>
                </Ctx.YourTodoContext.Provider>
              } 
              {loading && <Spinner/>}
              {addTodoModalOpened && 
                <Ctx.SetNewTodoContext.Provider value={todo => setNewTodo(todo)}>
                  <Ctx.CloseModalContext.Provider value={_ => setAddTodoModalOpened(false)}>
                    <CreateTodoModal/>
                  </Ctx.CloseModalContext.Provider>
                </Ctx.SetNewTodoContext.Provider>
              }
              {!addTodoModalOpened && 
                <AddTodoBtn clickHandler={_ => setAddTodoModalOpened(true)}/>
              }
            </div>
          </Ctx.TodoStatsContext.Provider>
        }
      </Ctx.BrightThemeContext.Consumer>
    </>
  )
}