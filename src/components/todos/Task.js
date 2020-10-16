import React from 'react'

export default ({task}) => (
  <h2 
    className={
      task.length > 200 
        ? 'extraExtraSmallText'
        : task.length > 150
          ? 'extraSmallText' 
          : task.length > 100 
            ? 'smallText' 
            : task.length > 50
              ? 'mediumText'
              : 'largeText' 
    }
  > 
    {task}
  </h2>
)