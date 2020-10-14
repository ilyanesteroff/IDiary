import React, { forwardRef } from 'react'
import Checkbox from '../FormComponents/Checkbox'
import Input from './Input'

export default forwardRef((props, refs) => (
  <div id="FilterTodos" className={`${props.theme? 'Bright' : 'Dark'}TodoStats`}>
    <h2>Filter</h2>
    <Checkbox onChange={props.cHandlers.showOnlyActiveOnChange} ref={refs.activeTodos}> 
      <p className="InputLabel">
        Active Todos
      </p>
    </Checkbox>
    <Checkbox onChange={props.cHandlers.showOnlyCompletedOnChange} ref={refs.completedTodos}>
      <p className="InputLabel">
        Completed Todos
      </p>
    </Checkbox>
    <Checkbox onChange={props.cHandlers.showElapsedOnChange} ref={refs.elapsedTodos}>
      <p className="InputLabel">
        Elapsed Todos
      </p>
    </Checkbox>
    <Input 
      type="text" 
      placeholder="Enter a tag" 
      changeHandler={props.cHandlers.tagsOnChange}
      ref={refs.tags}
    />
    <Input 
      type="text" 
      placeholder="Enter a task" 
      changeHandler={props.cHandlers.taskOnChange}
      ref={refs.task}
    />
    <Input 
      label="Pick a date"
      type="date" 
      changeHandler={props.cHandlers.createdAtOnChange}
      ref={refs.createdAt}
    />
    <Input
      label="Enter hours"
      type="number" 
      defaultValue="0" 
      min="0"
      changeHandler={props.cHandlers.timeToCompleteOnChange} 
      ref={refs.timeToComplete}
    />                   
    <button onClick={props.cHandlers.onUnsetFilter}>Unset filter</button>
  </div>
))