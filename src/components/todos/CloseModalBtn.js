import React from 'react'
import { TodoStatsContext } from '../../utils/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export default ({clickHandler}) => (
  <TodoStatsContext.Consumer>
    {stats => 
      <FontAwesomeIcon 
        id="closeIcon"
        icon={faTimesCircle} 
        onClick={clickHandler}
        className={
          stats.active + stats.completed === 0
            ? 'NoStats'
            : 'Stats'
        }
      />
    }
  </TodoStatsContext.Consumer>
)