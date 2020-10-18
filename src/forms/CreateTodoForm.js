import React, { useRef, useContext } from 'react'
import * as Ctx from '../utils/contexts'
import CloseModalBtn from '../components/todos/CloseModalBtn'
import Checkbox from '../components/FormComponents/Checkbox'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/Textarea'
import createTodo from '../actionHandlers/CreateTodo'


export default _ => {
  const Error = _ => useContext(Ctx.ErrorContext)

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
              <h2>Create Todo</h2>
              <CloseModalBtn clickHandler={closeModal}/>
              <form id="createTodoForm">
                <ComplainLog/>
                <div id="Checkboxes">
                  <Checkbox ref={completed}>
                    <p className="InputLabel">Todo is completed</p>
                  </Checkbox>
                  <Checkbox ref={publicT}>
                    <p className="InputLabel">Todo is public</p>
                  </Checkbox>
                </div>
                <Textarea
                  label="What you need to do?"
                  placeholder="Anything you need"
                  ref={task}
                />
                <Input
                  ref={timeToComplete}
                  type="number"
                  label="How long should it take"
                  placeholder="Hours"
                />
                <Ctx.TokenContext.Consumer>
                  {token =>
                    <Ctx.SetNewTodoContext.Consumer>
                      {setNewTodo =>
                        <button
                          onClick={async e => {
                            e.preventDefault()
                            const newTodo = await createTodo({
                              task: task.current.value,
                              timeToComplete: timeToComplete.current.value,
                              public: publicT.current.checked,
                              completed: completed.current.checked
                            }, token, val => setError.current(val))
                            setNewTodo({...newTodo})
                            closeModal()
                        }}
                      >Create Todo</button>
                      }
                    </Ctx.SetNewTodoContext.Consumer>
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