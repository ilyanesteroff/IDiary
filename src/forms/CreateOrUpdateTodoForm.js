import React, {useRef, useState, useContext} from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import Checkbox from '../components/FormComponents/Checkbox'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/Textarea'
import updateTodo from '../actionHandlers/CreateOrUpdateTodo'


export default ({closeModal, todoData, setError}) => {
  const SetNewTodo = _ => useContext(Ctx.SetNewTodoContext)
  const SetTodoToUpdate = _ => useContext(Ctx.SetTodoToUpdateContext)

  const completed = useRef(null)
  const publicT = useRef(null)
  const timeToComplete = useRef(null)
  const task = useRef(null)
  const setNewTodo = useRef(SetNewTodo())
  const setTodoToUpdate = useRef(SetTodoToUpdate())

  const [submiting, setSubmiting] = useState(false)

  return (
    <form id="createTodoForm" className={`${submiting? 'FormWithSpinner' : ''}`}> 
      <FormSpinner/>
      <ComplainLog/>
      <div id="Checkboxes">
        <Checkbox ref={completed} defaultChecked={todoData.value && todoData.value.completed ? true : false}>
          <p className="InputLabel">Todo is completed</p>
        </Checkbox>
        <Checkbox ref={publicT} defaultChecked={todoData.value && todoData.value.public ? true : false}>
          <p className="InputLabel">Todo is public</p>
        </Checkbox>
      </div>
      <Textarea
        label="What you need to do?"
        placeholder="Anything you need"
        value={todoData.value && todoData.value.task}
        ref={task}
      />
      <Input
        ref={timeToComplete}
        type="number"
        label="How long should it take"
        placeholder="Hours"
        defaultVal={
          todoData.value && todoData.value.timeToComplete
            ? todoData.value.timeToComplete / 3600000
            : ''
        }
      />
      <Ctx.TokenContext.Consumer>
        {token =>
          <button
            onClick={async e => {
              e.preventDefault()
              await updateTodo({
                task: task.current.value,
                public: publicT.current.checked,
                completed: completed.current.checked,
                timeToComplete: timeToComplete.current.value
              }, token, setError, todoData.value? setTodoToUpdate.current : setNewTodo.current, closeModal, setSubmiting, todoData.value && todoData.value, todoData.value && todoData.unset)
            }}
          >{todoData.value ? 'Update Todo' : 'Create Todo'}</button>
        }
      </Ctx.TokenContext.Consumer>
    </form>
  )
}