import React, { useRef, useContext } from 'react'
import * as Ctx from '../utils/contexts'
import CloseModalBtn from '../components/todos/CloseModalBtn'
import Checkbox from '../components/FormComponents/Checkbox'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/Textarea'
import createTodo from '../actionHandlers/CreateTodo'
import updateTodo from '../actionHandlers/UpdateTodo'


export default _ => {
  const Error = _ => useContext(Ctx.ErrorContext)
  const TodoToUpdateContext = _ => useContext(Ctx.TodoToUpdateContext)
  const SetNewTodo = _ => useContext(Ctx.SetNewTodoContext)
  const SetTodoToUpdate = _ => useContext(Ctx.SetTodoToUpdateContext)

  const todoData = useRef(TodoToUpdateContext())
  const setNewTodo = useRef(SetNewTodo())
  const setTodoToUpdate = useRef(SetTodoToUpdate())

  const setError = useRef(Error().setError)
  const completed = useRef(null)
  const publicT = useRef(null)
  const timeToComplete = useRef(null)
  const task = useRef(null)

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
              <form id="createTodoForm">
                <ComplainLog/>
                <div id="Checkboxes">
                  <Checkbox ref={completed} defaultChecked={todoData.current.value && todoData.current.value.completed ? true : false}>
                    <p className="InputLabel">Todo is completed</p>
                  </Checkbox>
                  <Checkbox ref={publicT} defaultChecked={todoData.current.value && todoData.current.value.public ? true : false}>
                    <p className="InputLabel">Todo is public</p>
                  </Checkbox>
                </div>
                <Textarea
                  label="What you need to do?"
                  placeholder="Anything you need"
                  value={todoData.current.value && todoData.current.value.task}
                  ref={task}
                />
                <Input
                  ref={timeToComplete}
                  type="number"
                  label="How long should it take"
                  placeholder="Hours"
                  defaultVal={
                    todoData.current.value && todoData.current.value.timeToComplete
                      ? todoData.current.value.timeToComplete / 3600000 
                      : ''
                  }
                />
                <Ctx.TokenContext.Consumer>
                  {token =>
                      <button 
                        onClick={e => 
                          !todoData.current.value
                            ? createTodo(e, {
                                task: task.current.value,
                                public: publicT.current.checked,
                                completed: completed.current.checked,
                                timeToComplete: timeToComplete.current.value
                              }, token, setError.current, setNewTodo.current, closeModal) 
                            : updateTodo(e, {
                                task: task.current.value,
                                public: publicT.current.checked,
                                completed: completed.current.checked,
                                timeToComplete: timeToComplete.current.value
                              }, token, todoData.current.value, setError.current, setTodoToUpdate.current, closeModal, todoData.current.unset)
                          }
                      >{todoData.current.value ? 'Update Todo' : 'Create Todo'}</button>
                  }
                </Ctx.TokenContext.Consumer>
              </form>
            </div>
          }
        </Ctx.BrightThemeContext.Consumer>
      }
    </Ctx.CloseModalContext.Consumer>
  )
}