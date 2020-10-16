import React from 'react'

export default ({tags}) => (
  <ul id="TodoTags">
    {tags.map((tag, index) => 
      <li key={'tag'+index}>
        <a href={`todos-tags/q=${tag}`}>
          {'#'+tag}
        </a>
      </li>
    )}
  </ul>
)