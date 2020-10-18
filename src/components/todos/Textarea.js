import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => (
  <div id="TaskTextArea">
    {
      props.label && <p>{props.label}</p>
    }
    <textarea
      maxLength="250"
      placeholder={props.placeholder? props.placeholder : ''}
      defaultValue={
        props.value
          ? props.value
          : ''
      }
      ref={ref}
    />
  </div>
))