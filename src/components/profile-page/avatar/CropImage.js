import React, { useState, useCallback, useRef, useContext } from 'react'
import ImageCrop from 'react-image-crop'
import getPresignedUrl from '../../../api/get-presigned-url'
import loadPic from '../../../api/send-pic'
import setAvatar from '../../../api/set-avatar'
import convertToFile from '../../../utils/images/base64StringToFile'
import { SetEditUserContext, SetUpdatedUserContext } from '../../../utils/contexts'

import "react-image-crop/dist/ReactCrop.css"


export default ({ imageSrc, imageExt, uploadCb, setError }) => {
  const Unset = _ => useContext(SetEditUserContext)
  const Update = _ => useContext(SetUpdatedUserContext)

  const unset = useRef(Unset().set)
  const update = useRef(Update())
  const imgRef = useRef(null)
   
  const [ crop, setCrop ] = useState({ unit: "%", width: 50, aspect: 1 / 1 })

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [ ])

  const clickHandler = async event => {
    event.preventDefault()

    uploadCb()
    const filename = 'pic.' + imageExt
    const newFile = convertToFile(imgRef.current.src, filename)

    const creds = await getPresignedUrl()
    if(!creds) return setError('Something broke')
    const success = await loadPic(newFile, creds.url)
    if(success) {
      await setAvatar(creds.key)
      update.current({ avatarUrl: creds.key })
    } else return setError('Something broke')
    
    unset.current('')
  }

  return(
    <div className="OverflowForm">
      <p>Crop an image</p>
      <ImageCrop 
        src={ imageSrc } 
        crop={ crop }
        onChange={(c) => setCrop(c)}
        onImageLoaded={onLoad}
        className="CropStyle"
        imageStyle={{ maxHeight: '50vh' }}
        keepSelection
      />
      <button onClick={ clickHandler }>Set</button>
    </div>
  )
}
