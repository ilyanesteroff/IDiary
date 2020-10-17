import React, { useState, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { 
  CloseModalContext, 
  BrightThemeContext, 
  TokenContext, 
  ErrorContext,
  SetNewTodoContext
} from '../../utils/contexts'
import Checkbox from '../FormComponents/Checkbox'
import ComplainLog from '../FormComponents/ComplainLog'
import Input from './Input'
import createTodo from '../../actionHandlers/CreateTodo'


export default props => {
  const Error = _ => useContext(ErrorContext)

  const setError = useRef(Error().setError)
  const completed = useRef(null)
  const publicT = useRef(null)
  const tags = useRef(null)
  const timeToComplete = useRef(null)
  const [task, setTask] = useState('')

  return(
    <CloseModalContext.Consumer>
      {closeModal =>
        <BrightThemeContext.Consumer>
          {theme =>
            <div id="createTodo" className={`${theme? 'Bright' : 'Dark'}Modal`}>
              <h2>Create Todo</h2>
              <FontAwesomeIcon icon={faTimesCircle} onClick={closeModal}/>
              <form id="createTodoForm">
                <ComplainLog/>
                <Checkbox ref={completed}>
                  <p className="InputLabel">Todo is completed</p>
                </Checkbox>
                <Checkbox ref={publicT}>
                  <p className="InputLabel">Todo is public</p>
                </Checkbox>
                <textarea
                  label="What you need to do?"
                  onChange={e => setTask(e.target.value)}
                  maxLength="250"
                />
                <Input
                  ref={tags}
                  type="text"
                  label="Tags of your todo"
                  placeholder="#Anything..."
                />
                <Input
                  ref={timeToComplete}
                  type="number"
                  label="How long should it take"
                  placeholder="Hours"
                />
                <TokenContext.Consumer>
                  {token =>
                    <SetNewTodoContext.Consumer>
                      {setNewTodo =>
                        <button
                          onClick={async e => {
                            e.preventDefault()
                            const newTodo = await createTodo({
                              task: task,
                              tags: tags.current.value,
                              timeToComplete: timeToComplete.current.value,
                              public: publicT.current.checked,
                              completed: completed.current.checked
                            }, token, val => setError.current(val))
                            console.log(newTodo)
                            setNewTodo({...newTodo})
                            closeModal()
                        }}
                      >Create Todo</button>
                      }
                    </SetNewTodoContext.Consumer>
                  }
                </TokenContext.Consumer>
              </form>
            </div>
          }
        </BrightThemeContext.Consumer>
      }
    </CloseModalContext.Consumer>
  )
}