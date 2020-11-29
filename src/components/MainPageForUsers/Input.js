import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default ({ onChange, currentOption }) => {
  const input = useRef(null)

  useEffect(_ => input.current && window.location.pathname.split[2] && input.current.focus())

  return(
    <div id="SearchInput">
      <input 
        type="text"
        ref={input}
        placeholder={ currentOption.length > 0 ? currentOption === 'todos' ? 'Enter a tag' : 'Enter a name' : ''}
        onChange={onChange}
      />
      <FontAwesomeIcon
        id="Loupe"
        icon={faSearch}
      />
    </div>
  )
}