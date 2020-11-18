import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import useResizer from '../../hooks/useWindowResizer'
import { IncomingReqsContext, UnseenMsgsContext } from '../../utils/contexts'
import formatNum from '../../utils/formatNotificationNumber'


export default props => {
  const [ width ] = useResizer()

  return(
    <IncomingReqsContext.Consumer>
      {({ requests }) =>
        <UnseenMsgsContext.Consumer>
          {({ messages }) =>
            <div id="logo">
              <FontAwesomeIcon 
                icon={faCompass} 
                onClick={props.clickHandler}
              />
              {width < 830 && requests + messages > 0 &&
                <p id="notification">{ formatNum(requests + messages) }</p>
              }
            </div> 
          }
        </UnseenMsgsContext.Consumer>
      }
    </IncomingReqsContext.Consumer>
  )
}