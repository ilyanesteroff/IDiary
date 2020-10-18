import React, { forwardRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import FilterForm from '../../forms/FilterForm'


export default forwardRef((props, refs) => {
  const [hideForm, setHideForm] = useState(false)
  return(
    <div id="FilterTodos">
      <h2>
        Filter 
        <div 
          id="HideFilter" 
          onClick={_ => setHideForm(!hideForm)}
        >
          <FontAwesomeIcon icon={hideForm? faFilter : faTimesCircle}/>
        </div>
      </h2>
      <div id="FilterTodos-form" className={hideForm? 'hiddenForm' : 'normalForm'}>
        <FilterForm refs={refs} cHandlers={props.cHandlers}/>
      </div>
    </div>
  )
})