import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => {
  return (
    <div id="CheckboxUnit">
      <label className="switch">
        <input 
          type="checkbox" 
          ref={ref}
          onChange={e => {
            if(props.onChange)
              props.onChange(e)
          }}
        />
        <span className="slider round RegCheckbox"></span>
      </label>
      {props.children}
    </div>
  )
})