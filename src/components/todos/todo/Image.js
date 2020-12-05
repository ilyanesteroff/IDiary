import React from 'react'
import link from '../../../utils/AWS'


export default ({ imgSrc }) => 
  imgSrc
    ? <img 
        src={link + imgSrc}
        alt=""
      />
    : null
