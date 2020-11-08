import React from 'react'
import { OpenModalContext, PassTodoDataContext } from '../../../utils/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'


export default ({todoData}) => (
  <OpenModalContext.Consumer>
    {openModal =>
      <PassTodoDataContext.Consumer>
        {passTodoData =>
          <FontAwesomeIcon
            id="EditTodoIcon"
            onClick={_ => {
              passTodoData(todoData)
              openModal()
            }}
            icon={faEdit}
          />
        }
      </PassTodoDataContext.Consumer>
    }
  </OpenModalContext.Consumer>
)