import React, { forwardRef } from 'react'
import Checkbox from '../FormComponents/Checkbox'
                                   
export default forwardRef((props, refs) => {
  return (
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
      <input 
        type="text" 
        placeholder="Tags" 
        onChange={props.cHandlers.tagsOnChange} 
        ref={refs.tags}
      />
      <input 
        type="text" 
        placeholder="Task" 
        onChange={props.cHandlers.taskOnChange} 
        ref={refs.task}
      />
      <input 
        type="date" 
        onChange={props.cHandlers.createdAtOnChange} 
        ref={refs.createdAt}
      />
      <input 
        type="number" 
        defaultValue="0" 
        step="0.1" 
        max="3000" 
        onChange={props.cHandlers.timeToCompleteOnChange} 
        ref={refs.timeToComplete}
      />                     
      <button onClick={props.cHandlers.onUnsetFilter}>Unset filter</button>
    </div>
  )
})