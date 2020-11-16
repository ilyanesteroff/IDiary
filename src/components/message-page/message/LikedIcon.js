import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default ({ liked }) =>
  <FontAwesomeIcon
    id="HeartIcon"
    className={ liked ? 'Like' : 'noLike' }
    icon={faHeart}
  />