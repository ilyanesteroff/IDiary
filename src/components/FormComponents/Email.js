import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => 
  <label>
    <input 
      type="email" 
      ref={ref}
      placeholder="Your email address"
    />
  </label>
)