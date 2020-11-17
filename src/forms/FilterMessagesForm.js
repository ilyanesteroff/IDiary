import React, { forwardRef } from 'react'
import Checkbox from '../components/FormComponents/Checkbox'
import Input from '../components/FormComponents/TodoInput'
import userIdComparer from '../utils/userIdComparer'
import { CurrentlyOpenedConvContext } from '../utils/contexts'


export default forwardRef(({ cHandlers }, refs ) => (
  <form id="FilterForm">
    <Checkbox onChange={cHandlers.showOnlyReceiversMsgs} ref={refs.receiversMsgs}>
      <CurrentlyOpenedConvContext.Consumer>
        {({ value }) => 
          <p className="InputLabel">
            { value.participants.find(p => !userIdComparer(p._id)).username } messages
          </p>
        }
      </CurrentlyOpenedConvContext.Consumer>
    </Checkbox>
    <Checkbox onChange={cHandlers.showOnlyYourMsgs} ref={refs.yourMsgs}>
      <p className="InputLabel">
        Your messages
      </p>
    </Checkbox> 
    <Checkbox onChange={cHandlers.showLikedMsgs} ref={refs.likedMsgs}> 
      <p className="InputLabel">
        Liked Messages
      </p>
    </Checkbox>
    <Input 
      type="text" 
      placeholder="Enter a text" 
      changeHandler={cHandlers.msgTextOnChange}
      ref={refs.msgText}
    />
    <Input 
      label="Pick a date"
      type="date" 
      changeHandler={cHandlers.writtenAtOnChange}
      ref={refs.writtenAt}
    /> 
    <button onClick={cHandlers.onUnsetFilter}>Unset filter</button>
  </form>
))