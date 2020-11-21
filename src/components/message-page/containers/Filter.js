import React, { useState, forwardRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import FilterForm from '../../../forms/FilterMessagesForm'


export default forwardRef((props, refs) => {
  const [ hideForm, setHideForm ] = useState(false)
  const [ width, setWidth ] = useState(window.innerWidth)
   
  const resize = _ => setWidth(window.innerWidth)

  useEffect(_ => {
    window.addEventListener('resize', resize)
    return _ => window.removeEventListener('resize', resize)
  })

  return width > 1400
    ? (
      <div id="RightSideBar">
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
          <FilterForm ref={refs} cHandlers={props.cHandlers}/>
        </div>
      </div>
    )
    : null
})