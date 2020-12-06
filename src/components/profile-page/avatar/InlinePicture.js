import React from 'react'
import link from '../../../utils/AWS'
import useOutsideClicker from '../../../hooks/useOutsideClicker'
import userIdComparer from '../../../utils/userIdComparer'
import Options from './Options'


export default ({ src, userId }) => {
  const [ opened, setOpened, container ] = useOutsideClicker()
  
  return(
    <div id="MainAvatarImage">
      <img
        src={link + src}
        alt=""
        ref={ container }
        onClick={_ => setOpened(!opened)}
      />
      {opened && userIdComparer(userId) &&
        <Options url={ src }/>
      }
    </div>
  )
}