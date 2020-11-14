import React from 'react'

export default ({ time }) => {
  const date = new Date(time)
  let formatedTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`

  return <p>{ formatedTime }</p>
}