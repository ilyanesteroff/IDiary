import React from 'react'
import CloseModalBtn from '../portals/CloseModalBtn'


export default props => (
  <div className={`${props.theme? 'Bright' : 'Dark'}Modal`} id="AreYouSure">
    <CloseModalBtn 
      clickHandler={props.no}  
      className="TopRightCorner"
    />
    <form id="FormInModal">
      {props.children}
      <button id="NoBtn" onClick={props.no}>
        Cancel
      </button>
      <button id="YesBtn" onClick={props.yes}>
        Yes
      </button>
    </form>
  </div>
)