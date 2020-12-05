import React, { useState } from 'react'
import link from '../../../utils/AWS'
import userIdComparer from '../../../utils/userIdComparer'


export default ({ src }) => {
  return(
    <img
      src={link + src}
      alt=""
    />
  )
}