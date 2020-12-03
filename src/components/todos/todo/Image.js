import React from 'react'

export default ({ imgSrc }) => (
  imgSrc
    ? <img 
        src={'https://todo-pic-bucket.s3.eu-north-1.amazonaws.com/' + imgSrc}
        alt="An image"
      />
    : null
)