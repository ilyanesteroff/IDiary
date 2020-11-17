import React from 'react'
import Checkbox from '../components/FormComponents/Checkbox'
import Input from '../components/FormComponents/TodoInput'

export default ({ cHandlers, refs }) => (
  <form id="FilterForm">
    <Checkbox onChange={cHandlers.showOnlyActiveOnChange} ref={refs.activeTodos}> 
      <p className="InputLabel">
        Active Todos
      </p>
    </Checkbox>
    <Checkbox onChange={cHandlers.showOnlyCompletedOnChange} ref={refs.completedTodos}>
      <p className="InputLabel">
        Completed Todos
      </p>
    </Checkbox>
    <Checkbox onChange={cHandlers.showElapsedOnChange} ref={refs.elapsedTodos}>
      <p className="InputLabel">
        Elapsed Todos
      </p>
    </Checkbox>
    <div id="filterInputs">
      <Input 
        type="text" 
        placeholder="Enter a tag" 
        changeHandler={cHandlers.tagsOnChange}
        ref={refs.tags}
      />
      <Input 
        type="text" 
        placeholder="Enter a task" 
        changeHandler={cHandlers.taskOnChange}
        ref={refs.task}
      />
      <Input 
        label="Pick a date"
        type="date" 
        changeHandler={cHandlers.createdAtOnChange}
        ref={refs.createdAt}
      /> 
      <Input
        label="Enter hours"
        type="number" 
        defaultValue="0" 
        min="0"
        changeHandler={cHandlers.timeToCompleteOnChange} 
        ref={refs.timeToComplete}
      />             
    </div>      
    <button onClick={cHandlers.onUnsetFilter}>Unset filter</button>
  </form>
)