import React from 'react'

export default ({checked, onChange}) => (
  <label className="switch">
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
    />
    <span className="slider round toggler"></span>
  </label>
)