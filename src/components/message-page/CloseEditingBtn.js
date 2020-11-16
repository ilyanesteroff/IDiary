import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../utils/contexts'


export default ({ clearTxtbox }) => (
  <Ctx.SetMessageToEditLocallyContext.Consumer>
    {({ set }) =>
      <div 
        id="CloseEditingBtn"
        onClick={_ => {
          clearTxtbox()
          set(null)
        }}
      >
        <FontAwesomeIcon
          icon={faTimes}
        />
      </div>
    }
  </Ctx.SetMessageToEditLocallyContext.Consumer>
)