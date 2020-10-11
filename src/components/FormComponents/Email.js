import React, { forwardRef } from 'react'
import InputLabel from './InputLabel'

export default forwardRef((props, ref) => 
  <div>
    {props.signup &&
      <InputLabel required={true} label={props.label}/>
    }
    <input 
      type="email" 
      ref={ref}
      placeholder="Your email address"
    />
  </div>
)