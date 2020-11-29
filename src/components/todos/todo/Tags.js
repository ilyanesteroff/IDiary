import React from 'react'
import { Link } from 'react-router-dom'


export default ({ tags }) => (
  <ul id="TodoTags">
    {tags.map((tag, index) => 
      <li key={'tag'+index}>
        <Link to={`/tags/${tag}`}>
          {'#'+tag}
        </Link>
      </li>
    )}
  </ul>
)