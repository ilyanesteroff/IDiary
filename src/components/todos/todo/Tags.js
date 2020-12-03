import React from 'react'


export default ({ tags }) => (
  <ul id="TodoTags">
    {tags.map((tag, index) => 
      <li key={'tag'+index}>
        <a href={`/tags/${tag}`}>
          {'#'+tag}
        </a>
      </li>
    )}
  </ul>
)