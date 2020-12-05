import React, { forwardRef } from 'react'

export default forwardRef((props, ref) => {
  return(
    <div className="Image-Preview">
      <p>Image preview</p>
      <canvas
        ref={ ref }
      />
    </div>
  )
})