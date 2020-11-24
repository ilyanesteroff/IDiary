import React, { useState, useRef, useEffect } from 'react'


export default ({ src, content, alt, sideEffect }) => {
  const [ touched, setTouched ] = useState(false)
  const image = useRef(null)

  let options = {
    root: null,
    rootMargin: '5px',
    threshold: sideEffect ? 0.1 : 0.05
  }

  const observer = new IntersectionObserver(_ => {
    if(window.pageYOffset > window.innerHeight){
      if(!touched) setTouched(true)
    }
  }, options)

  useEffect(_ => image.current && observer.observe(image.current))

  return(
    <>
      <h2 id="Feature" className={ sideEffect ? 'left' : 'center'}>{ content }</h2>
      <div 
        id="separator" 
        ref={ image } 
        className={
          sideEffect
            ? touched ? 'noMargin' : 'leftMargin' 
            : touched ? 'noMargin' : 'topMargin'
        }
      >
        <img
          src={ src }
          alt={ alt }
          className="image"
        />
      </div>
    </>
  )
}