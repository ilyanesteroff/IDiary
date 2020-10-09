import React, { forwardRef } from 'react'
import { string, bool } from 'prop-types'

const input = forwardRef((props, ref) => {
  const validateInput = e => {
    if(props.strictLowerCase) e.target.value = e.target.value.toLowerCase()
  }

  return(
    <div>
      <p>
        {'Your ' + props.placeholder}
        {props.required &&
          <span className="requiredField">
            *
          </span>
        }
      </p>
      <input 
        type="text"
        placeholder={props.placeholder}
        ref={ref}
        onChange={validateInput}
      />
    </div>
  )
})

input.propTypes ={
  placeholder: string,
  required: bool 
}

export default input

