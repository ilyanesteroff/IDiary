import React from 'react'
import RemoveImage from '../todos/todo/RemoveImage'


export default ({ setImage, editing, file }) => {
  return(
  <>
    <p>{ editing? 'pick a new image or double click to remove existing' : 'Pick an image' }</p>
    <div id="RelativeInput">
      <input
        type="file"  
        accept="image/*" 
        onChange={e => setImage(e.target.files[0])}
      />
      {editing && file && file !== 'remove' &&
        <RemoveImage clickHandler={_ => setImage('remove')}/>
      }
    </div>
  </>
  )
}