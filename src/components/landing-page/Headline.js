import React from 'react'
import DisappearingStuff from './DisappearingStuff'

export default ({theme}) => (
  <h1 id="headline" className={ theme ? 'BrightHeadline' : 'DarkHeadline'}>
    <span>Share</span>
    <span>
      <DisappearingStuff/>
    </span>
    <span>With your friends!</span>
 </h1>
)