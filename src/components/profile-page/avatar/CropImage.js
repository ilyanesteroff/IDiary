import React, { useState, useEffect, useCallback, useRef, useContext } from 'react'
import ImageCrop from 'react-image-crop'
import Canvas from './Canvas'
import getPresignedUrl from '../../../api/get-presigned-url'
import loadPic from '../../../api/send-pic'
import setAvatar from '../../../api/set-avatar'
import { SetEditUserContext, SetUpdatedUserContext } from '../../../utils/contexts'

import "react-image-crop/dist/ReactCrop.css"

const pixelRatio = window.devicePixelRatio || 1

export default ({ imageSrc, imageExt, uploadCb, setError }) => {
  const Unset = _ => useContext(SetEditUserContext)
  const Update = _ => useContext(SetUpdatedUserContext)

  const unset = useRef(Unset().set)
  const update = useRef(Update())
  const imgRef = useRef(null)
  const canvasRef = useRef(null)
   
  const [ crop, setCrop ] = useState({ unit: "%", width: 50, aspect: 1 / 1 })
  const [ completedCrop, setCompletedCrop ] = useState(null)
  const [ blob, setBlob ] = useState('')

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [ ])

  useEffect(_ => {
    if (!completedCrop || !canvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = canvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    canvas.toBlob(blob => setBlob(blob), imageExt)    
  }, [ completedCrop, imageExt ])

  const clickHandler = async event => {
    event.preventDefault()

    uploadCb()
    const newFile = new File([ blob ], 'pic', { lastModified: new Date().getTime() })
    console.log(newFile)
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
        onComplete={(c) => setCompletedCrop(c)}
        onImageLoaded={ onLoad }
        className="CropStyle"
        imageStyle={{ maxHeight: '50vh' }}
        keepSelection
      />
      <Canvas ref={ canvasRef }/>
      <button onClick={ clickHandler }>Set</button>
    </div>
  )
}
