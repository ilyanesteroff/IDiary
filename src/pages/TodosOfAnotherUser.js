import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import Spinner from '../components/spiners/BigSpinner'
import * as Ctx from '../utils/contexts'
import useTodoLoader from '../hooks/Todos/useTodoLoader'
import useTodoManipulator from '../hooks/Todos/useTodoManipulator'
import useTodoScroller from '../hooks/Todos/useTodoScroller'
import Todos from '../components/todos/containers/index'
import Chapter from '../components/todos/other/Chapter'


export default ({ userId }) => {
  const [ error, setError ] = useState('')
  const [ page, setPage ] = useState(1)

  const [ fullfilledTodos, activeTodos, nextPage, setNextPage, todos, loading ] = useTodoLoader(page, setError, userId)

  const [ todosToExpose, refs, changeHandlers, active, completed ] = useTodoManipulator(todos, activeTodos, fullfilledTodos)
  
  useTodoScroller(page, setPage, nextPage, setNextPage)

  useEffect(_ => {
    if(todos.length > 0) document.title = `${todos[0].creator.username}'s todos`
  }, [ todos ])
  
  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer>
        {theme =>
          <Ctx.TodoStatsContext.Provider value={{active: active, completed: completed}}>
            <div id="TodosPage" className={`${theme? 'Bright' : 'Dark'}Page Page`}>
              {error.length > 0 && <h3>{error}</h3>}              
              {(completed === 0 && active === 0 && error.length === 0)  &&
                <h3>It seems like there are no available todos</h3>
              } 
              {todos.length > 0 &&
                <>    
                  {active + completed > 0 &&
                    <>
                      <Chapter username={todos[0].creator.username}/>
                      <Ctx.YourTodoContext.Provider value={false}>
                        <Todos todos={todosToExpose} changeHandlers={changeHandlers} refs={refs}/>
                        {todos.length > 0 &&  todosToExpose.length === 0 &&
                          <h3>No todos found matching your criteria</h3>
                        }
                      </Ctx.YourTodoContext.Provider>
                    </>
                  } 
                </>
              }              
              {loading && <Spinner/>}
            </div>
          </Ctx.TodoStatsContext.Provider>
        }
      </Ctx.BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}