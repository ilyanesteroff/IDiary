import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default ({ onChange, currentOption }) => (
  <div id="SearchInput">
    <input 
      type="text"
      placeholder={ currentOption.length > 0 ? currentOption === 'todos' ? 'Enter a tag' : 'Enter a name' : ''}
      onChange={onChange}
    />
    <FontAwesomeIcon
      id="Loupe"
      icon={faSearch}
    />
  </div>
)
