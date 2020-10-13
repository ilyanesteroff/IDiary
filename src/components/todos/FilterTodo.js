import React, { useState } from 'react'
import Checkbox from '../FormComponents/Checkbox'
import useFilterForm from '../../hooks/useFilterForm'
//import InputField from '../FormComponents/InputField'
                                   
export default (props) => {
  const [unset, setUnset] = useState(false)

  const [activeTodos, completedTodos, tags, task, date, number] = useFilterForm(unset, _ => setUnset(false))

  return (
    <div id="FilterTodos" className={`${props.theme? 'Bright' : 'Dark'}TodoStats`}>
      <h2>Filter</h2>
      <Checkbox onChange={props.showOnlyActiveOnChange} ref={activeTodos}> 
        <p className="InputLabel">
          Active Todos
        </p>
      </Checkbox>
      <Checkbox onChange={props.showOnlyCompletedOnChange} ref={completedTodos}>
        <p className="InputLabel">
          Completed Todos
        </p>
      </Checkbox>
      <input type="text" placeholder="Tags" onChange={props.tagsOnChange} ref={tags}/>
      <input type="text" placeholder="Task" onChange={props.taskOnChange} ref={task}/>
      <input type="date" onChange={props.createdAtOnChange} ref={date}/>
      <input type="number" defaultValue="0" step="0.1" max="3000" onChange={props.timeToCompleteOnChange} ref={number}/>
      <button onClick={_ => setUnset(true)}>Unset filter</button>
    </div>
  )
}