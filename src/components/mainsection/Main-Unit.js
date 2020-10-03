import React, { 
  useState, 
  useContext, 
  useEffect, 
  useRef
} from 'react'
import { Link } from 'react-router-dom'
import { BrightThemeContext } from '../../utils/contexts'
import './main-unit.css'

export const ViewForVisitors = props => {
  const Theme = _ => useContext(BrightThemeContext)

  return (
    <div
      id="main"
      className={
          Theme()
            ? 'BrightMain'
            : 'DarkMain'
      }
    >
      <h1 id="headline"
        className={
            Theme()
              ? 'BrightHeadline'
              : 'DarkHeadline'
        }
      >
        <span>Share</span>
        <span>
          <DisappearingStuff theme={Theme()}/>
        </span>
        <span>With your friends!</span>
      </h1>
      <p id="para"
        className={
          Theme()
            ? 'BrightParagraph'
            : 'DarkParagraph'
        }
      >
        <span className="pSpan">TooDooDoo is the best way to share todos with your friends </span>
        <span className="pSpan">TooDooDoo also has a messenger feature embeded, so you can connect with everyone </span>
        <span className="pSpan">
          <em>To get started create an account or signup </em>
        </span>
      </p>
      <div id="buttons"
        className={
          Theme()
            ? 'BrightButtons'
            : 'DarkButtons'
        }
      >
        <Link to='/login'>
          Login
        </Link>
        <Link to='/create-user'>
          Signup
        </Link>
      </div>
    </div>
  )
}  

const DisappearingStuff = ({theme}) => {
  //Actually it would be fine for options to be a state too
  const options = [' Todos ', ' Moments ', ' Messages ', ' Emotions ', ' Ideas ']
  const timeToShow = 2000
  const [stuffToShow, setStuffToShow] = useState(0)

  let updateStuff = _ => 
    stuffToShow === options.length - 1
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
      {options[stuffToShow]}
    </b>
  )
}