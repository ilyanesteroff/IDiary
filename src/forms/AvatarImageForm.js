import React, { useState, useRef } from 'react'
import FormSpinner from '../components/spiners/FormSpinner'
import CropImage from '../components/profile-page/avatar/CropImage'
import useComplainLog from '../hooks/useComplainLog'
import useFormSubmitter from '../hooks/useFormSubmiter'
import extractFileExt from '../utils/extractimageExt'


export default () => {
  const [ image, setImage ] = useState(null)
  const [ imageExt, setImageExt ] = useState(null)

  const input = useRef(null)

  const [ setError, complainLog ] = useComplainLog()
  const [ setSubmiting, className ] = useFormSubmitter()
  console.log('rendering')
  const imageDownloadHandle = event => {
    setError('')
    const currentFile = event.target.files[0]
    if(currentFile.size > 2097152) {
      event.target.val = ''
      setImage(null)
      return setError('The image size cannot be more than 2mb')
    }
    const fileReader = new FileReader()
    fileReader.addEventListener('load', _ => {
      const result = fileReader.result
      setImage(result)
      setImageExt(extractFileExt(result))
    }, false)
    fileReader.readAsDataURL(currentFile)
  }

  return(
    <form id="FormInModal" className={ className }>
      <FormSpinner/>
      { complainLog }
      <input
        ref={ input }
        type="file"  
        accept="image/*" 
        onChange={imageDownloadHandle}
      />
      {image !== null &&
        <CropImage 
          imageSrc={ image } 
          imageExt={ imageExt }
          setError={ setError }
          uploadCb={_ => {
            setSubmiting(true)
            input.current.disabled = true
          }}
          failureCb={_ => {
            setSubmiting(false)
            input.current.disabled = false
          }}
        />
      }
    </form>
  )
}