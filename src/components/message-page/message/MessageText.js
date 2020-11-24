import React from 'react'
import validator from 'validator'


export default ({ text }) => {
  const chunks = text.split(' ')

  return(
    <p id="MsgTxt">
      { 
        chunks.map((c, i) => {
          return validator.isURL(c) 
            ? <a 
               href={ c }
               id="activeOption"
               key={ "link" + i }
               style={{ wordWrap: 'break-word' }}
              >
                { c + ' ' }
              </a>
            : <span key={ i }>{ c + ' ' }</span>
        }) 
      }
    </p>
  )
}