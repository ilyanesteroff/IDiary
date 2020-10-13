import React, { forwardRef } from 'react'
import InputLabel from '../FormComponents/InputLabel'

export default forwardRef((props, ref) => {
  return (
    <>
      {props.label !== undefined &&
        <InputLabel 
          required={false} 
          label={props.label}
        />
      }
      <textarea ref={ref} rows="3" maxLength="120"/>
    </>
  )
})