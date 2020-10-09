import React, { 
  useState, 
  useEffect,
  useRef 
} from 'react'

export default _ => {
  const options = useRef([' Todos ', ' Moments ', ' Messages ', ' Emotions ', ' Ideas '])
  const [stuffToShow, setStuffToShow] = useState(0)
  const timeToShow = 2000
  
  let updateStuff = _ => 
    stuffToShow === options.current.length - 1
      ? setStuffToShow(0)
      : setStuffToShow(stuffToShow + 1)

  const intervalRef = useRef()

  useEffect(_ => {
    let interval = setInterval(updateStuff, timeToShow)
    intervalRef.current = interval
 
    return _ => clearInterval(intervalRef.current)
  })
 
  return(
    <b id="DisappearingStuff">
      {options.current[stuffToShow]}
    </b>
  )
}