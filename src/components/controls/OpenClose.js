import React from 'react'

export default props => (
  <div 
    onClick={props.clickHandler} 
    className={props.theme ? 'BrightCloser' : 'DarkCloser'}>
    <span id="firstLine"></span>
    <span id="firstLine"></span>
    <span id="firstLine"></span>
  </div>
)