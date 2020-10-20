import React, { useRef, useContext } from 'react'
import * as Ctx from '../../utils/contexts'
import CloseModalBtn from './CloseModalBtn'
import CreateOrUpdateTodoFrom from '../../forms/CreateOrUpdateTodoForm'


export default _ => {
  const Error = _ => useContext(Ctx.ErrorContext)
  const TodoToUpdateContext = _ => useContext(Ctx.TodoToUpdateContext)
  const todoData = useRef(TodoToUpdateContext())
  const setError = useRef(Error().setError)

  return(
    <Ctx.CloseModalContext.Consumer>
      {closeModal =>
        <Ctx.BrightThemeContext.Consumer>
          {theme =>
            <div id="createTodo" className={`${theme? 'Bright' : 'Dark'}Modal`}>
              <h2>{todoData.current.value ? 'Update Todo' : 'Create Todo'}</h2>
              <CloseModalBtn clickHandler={_ => {
                closeModal()
                setError.current('')
                if(todoData.current.value !== null) todoData.current.unset()
              }}/>
              <CreateOrUpdateTodoFrom 
                todoData={todoData.current}
                closeModal={closeModal}
                setError={setError.current}
              />
            </div>
          }
        </Ctx.BrightThemeContext.Consumer>
      }
    </Ctx.CloseModalContext.Consumer>
  )
}