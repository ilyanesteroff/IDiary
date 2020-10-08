import React, { forwardRef } from 'react'
import { string, bool } from 'prop-types'

const input = forwardRef((props, ref) => {
  console.log(props.required)
  return(
    <div>
      <p>{'Your ' + props.placeholder}</p>
      <input 
        type="text"
        placeholder={props.placeholder}
        ref={ref}
        onFocus={_ => console.log(props.required)}
      />
    </div>
  )
})

input.propTypes ={
  placeholder: string,
  required: bool 
}

export default input

