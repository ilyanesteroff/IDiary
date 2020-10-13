import React, { useRef } from 'react'
import InputField from '../FormComponents/InputField'
import Checkbox from '../FormComponents/Checkbox'
import Textarea from '../FormComponents/Textarea'

export default () => {
  const tags = useRef(null)
  const publicTodo = useRef(null)
  const completedTodo = useRef(null)
  const task = useRef(null)

  return (
    <form>
      <Textarea ref={task} label="Task"/>
      <InputField 
        ref={tags}
        withLabel 
        placeholder="Tags"
      />
      <div>
        <Checkbox ref={publicTodo}> 
          <p className="InputLabel">
            Todo is public
          </p>
        </Checkbox>
        <Checkbox ref={completedTodo}>
          <p className="InputLabel">
            Todo is completed
          </p>
        </Checkbox>
      </div>
    </form>
  )
}