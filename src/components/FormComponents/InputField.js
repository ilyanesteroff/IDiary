import React, { forwardRef } from 'react'
import InputLabel from './InputLabel'
import { string, bool } from 'prop-types'
import { strictCheckForNames, strictCheckForUserName } from '../../utils/regExp'

const input = forwardRef((props, ref) => {
  const validateInput = e => {
    if(props.name)
      if(strictCheckForNames.test(e.target.value.substr(e.target.value.length-1))) e.target.value = e.target.value.substr(0, e.target.value.length-1)
    if(props.username)
      if(strictCheckForUserName.test(e.target.value.substr(e.target.value.length-1))) e.target.value = e.target.value.substr(0, e.target.value.length-1)
    if(props.strictLowerCase) e.target.value = e.target.value.toLowerCase()
  }

  return( 
    <div>
      {props.withLabel &&
        <InputLabel 
          required={props.required} 
          label={
            props.name || props.username 
              ? 'Your ' + props.placeholder 
              : props.placeholder
          }
        />
      }
      <input 
        type="text"
        placeholder={props.placeholderplaceholder}
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

