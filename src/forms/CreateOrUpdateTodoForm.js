import React, { useRef, useState, useContext, useEffect, memo } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import Checkbox from '../components/FormComponents/Checkbox'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/other/Textarea'
import ImageInput from '../components/FormComponents/ImageInput'
import updateTodo from '../actionHandlers/CreateOrUpdateTodo'
import useComplainLog from '../hooks/useComplainLog'
import restoreFocus from '../utils/restoreFocus'


export default memo(({ closeModal, todoData }) => {
  const SetNewTodo = _ => useContext(Ctx.SetNewTodoContext)
  const SetTodoToUpdate = _ => useContext(Ctx.SetTodoToUpdateContext)
  const [ image, setImage ] = useState(null) 
  
  const completed = useRef(null)
  const publicT = useRef(null)
  const timeToComplete = useRef(null)
  const task = useRef(null)
  const setNewTodo = useRef(SetNewTodo())
  const setTodoToUpdate = useRef(SetTodoToUpdate())
  
  useEffect(_ => task.current && restoreFocus(task.current))

  const [ submiting, setSubmiting ] = useState(false)
  const [ setError, complainLog ] = useComplainLog()

  return (
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}> 
      <FormSpinner/>
      { complainLog }
      <div id="Checkboxes">
        <Checkbox ref={completed} defaultChecked={todoData.value && todoData.value.completed ? true : false}>
          <p className="InputLabel">Todo is completed</p>
        </Checkbox>
        <Checkbox ref={publicT} defaultChecked={todoData.value && todoData.value.public ? true : false}>
          <p className="InputLabel">Todo is public</p>
        </Checkbox>
      </div>
      <Textarea label="What you need to do?" placeholder="Anything you need" value={todoData.value && todoData.value.task} ref={task}/>
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
      <ImageInput 
        editing={ todoData.value } 
        setImage={val => setImage(val)}
        file={image}
      />
      <button
        onClick={async e => {
          e.preventDefault()
          await updateTodo({
            task: task.current.value,
            public: publicT.current.checked,
            completed: completed.current.checked,
            timeToComplete: timeToComplete.current.value,
            image: image
          }, setError, todoData.value? setTodoToUpdate.current : setNewTodo.current, closeModal, setSubmiting, todoData.value && todoData.value, todoData.value && todoData.unset)
        }}
      >
        {todoData.value ? 'Update Todo' : 'Create Todo'}
      </button>
    </form>
  )
}, (prev, next) => prev.todoData === next.todoData)