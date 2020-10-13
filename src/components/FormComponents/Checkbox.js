import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => {
  return (
    <div id="CheckboxUnit">
      <input
        type="checkbox"
        ref={ref}
        onChange={e => {
          if(props.onChange)
            props.onChange(e)
        }}
      />
      {props.children}
    </div>
  )
})