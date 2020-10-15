import React, { forwardRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faFilter } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '../FormComponents/Checkbox'
import Input from './Input'

export default forwardRef((props, refs) => {
  const [hideForm, setHideForm] = useState(false)
  return(
    <div id="FilterTodos" className={`${props.theme? 'Bright' : 'Dark'}TodoStats`}>
      <h2>
        Filter 
        <div 
          id="HideFilter" 
          onClick={_ => setHideForm(!hideForm)}
        >
          <FontAwesomeIcon icon={hideForm? faFilter : faWindowClose}/>
        </div>
      </h2>
      <div id="FilterTodos-form" className={hideForm? 'hiddenForm' : 'normalForm'}>
        <form id="FilterForm">
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
          <div id="filterInputs">
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
          </div>      
          <button onClick={props.cHandlers.onUnsetFilter}>Unset filter</button>
        </form>
      </div>
    </div>
  )
})