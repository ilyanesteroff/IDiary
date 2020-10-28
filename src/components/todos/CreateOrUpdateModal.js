import React, { useRef, useContext } from 'react'
import * as Ctx from '../../utils/contexts'
import CloseModalBtn from '../portals/CloseModalBtn'
import CreateOrUpdateTodoFrom from '../../forms/CreateOrUpdateTodoForm'


export default _ => {
  const TodoToUpdateContext = _ => useContext(Ctx.TodoToUpdateContext)
  const todoData = useRef(TodoToUpdateContext())

  return(
    <Ctx.CloseModalContext.Consumer>
      {closeModal =>
        <Ctx.BrightThemeContext.Consumer>
          {theme =>
            <div id="createTodo" className={`${theme? 'Bright' : 'Dark'}Modal`}>
              <h2>{todoData.current.value ? 'Update Todo' : 'Create Todo'}</h2>
              <Ctx.TodoDataContext.Consumer>
                {stats => 
                  <CloseModalBtn clickHandler={_ => {
                    closeModal()
                    if(todoData.current.value !== null) todoData.current.unset()
                  }}
                    className={
                      stats.active + stats.completed === 0
                        ? 'NoStats'
                        : 'Stats'
                    }
                  />
                }
              </Ctx.TodoDataContext.Consumer>
              <CreateOrUpdateTodoFrom 
                todoData={todoData.current}
                closeModal={closeModal}
              />
            </div>
          }
        </Ctx.BrightThemeContext.Consumer>
      }
    </Ctx.CloseModalContext.Consumer>
  )
}