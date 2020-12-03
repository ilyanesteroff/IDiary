import React from 'react'


export default ({ setImage, editing }) => {
  return(
  <>
    <p>{ editing? 'pick a new image or double click to remove existing' : 'Pick an image' }</p>
    <input
      type="file"  
      accept="image/*" 
      onDoubleClick={e => {
        console.log(e.target.value)
        if(editing){
          setImage('remove')
        }
      }}
      onChange={e => setImage(e.target.files[0])}
    />
  </>
  )
}