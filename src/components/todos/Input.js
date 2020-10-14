import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => {
  return (
    <div id="input">
      <p>
        {props.label}
      </p>
      <input 
        type={props.type} 
        defaultValue={props.defaultVal || null} 
        placeholder={props.placeholder || null}
        step={props.step || null} 
        min={props.min || null}
        onChange={props.changeHandler} 
        ref={ref}
      />   
    </div>
  )
})