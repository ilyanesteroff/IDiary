import React, { useState } from 'react'
import Spinner from '../spiners/BigSpinner'
import Todos from '../todos/containers/index'
import useTodoLoader from '../../hooks/Todos/useLoadingTodosByTag'
import useTodoFilter from '../../hooks/Todos/useTodoFilterForm'
import useTodoScroller from '../../hooks/Todos/useTodoScroller'
import * as Ctx from '../../utils/contexts'


export default ({ tag }) => {
  const [ error, setError ] = useState('')
  const [ page, setPage ] = useState(1)
  
  const [ nextPage, setNextPage, todos, loadingTodos, totalTodos ] = useTodoLoader(page, setError, tag)

  const [ todosToExpose, refs, changeHandlers ] = useTodoFilter(todos) 

  useTodoScroller(page, setPage, nextPage, setNextPage)

  return(
    <>
      {error.length > 0 && <h3>{error}</h3>}
      {todos.length === 0 && totalTodos === 0 && !loadingTodos &&
        <h3>No todos found matching #{tag} tag</h3>
      }
      {todos.length > 0 &&
        <>    
          {todos.length > 0 &&
            <Ctx.TodoStatsContext.Provider 
              value={{
                active: todosToExpose.filter(t => !t.completed).length, 
                completed: todosToExpose.filter(t => t.completed).length
              }}
            >
              <>
                <h1>#{tag}</h1>
                <Ctx.YourTodoContext.Provider value={false}>
                  <Todos todos={todosToExpose} changeHandlers={changeHandlers} refs={refs}/>
                  {todos.length > 0 &&  todosToExpose.length === 0 &&
                    <h3>No todos found matching your criteria</h3>
                  }
                </Ctx.YourTodoContext.Provider>
              </>
            </Ctx.TodoStatsContext.Provider>
          } 
        </>
      }   
      {loadingTodos && <Spinner/>}
    </>
  )
}