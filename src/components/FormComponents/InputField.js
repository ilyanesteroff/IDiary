import React, { forwardRef } from 'react'
import { string, bool } from 'prop-types'

const input = forwardRef((props, ref) => {
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
      />
    </div>
  )
})

input.propTypes ={
  placeholder: string,
  required: bool 
}

export default input

