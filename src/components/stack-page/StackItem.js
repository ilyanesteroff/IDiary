import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default props => (
  <li>
    <h4>
      { props.label }
      <span id="activeOption">
        <FontAwesomeIcon icon={ props.icon }/>
      </span>
    </h4>
    <p id="overflowItem">
      { props.children }
    </p>
  </li>
) 