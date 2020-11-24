import React, { useEffect } from 'react'
import Chapter from '../Global/Chapter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faUserPlus, faCogs, faUnlock, faPaperPlane, faCheck, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faTrashAlt, faTimesCircle, faCheckCircle, faComment } from '@fortawesome/free-regular-svg-icons'


export default _ => {
  useEffect(_ => window.scrollTo(0, 0), [ ])
 
  return(
    <>
      <Chapter 
        label="Features"
        icon={ faArchive }
      />
      <div id="Features">
        <h4>Todo</h4>
        <p>
          <span id="activeOption">Creating todos</span>
           , with tags, with task, with status, and with time to complete in hours, that's paramount:D
        </p>
        <p>
          <span id="activeOption">Editing todos</span>,
           by clicking on <FontAwesomeIcon icon={ faEdit } id="activeOption"/> in the right lower corner of todo
        </p>
        <p>
          <span id="activeOption">Deleting todos</span>, 
           by clicking on  <FontAwesomeIcon icon={ faTrashAlt } id="RejectRequest"/> in the right lower corner of todo
        </p>
        <p>
          <span id="activeOption">Filtering todos</span>,
           there is a great todo filter intended for this, so you can sort todos by date, tags, status, etc
        </p>
        <p>
          <span id="activeOption">Viewing todos of others</span>,
           you are able to see only those todos that are <span id="RejectRequest">public</span> and only if user is public or you are following him
        </p>
        <p>
          <span id="activeOption">Search todos by tags</span>,
           note that private todos and todos of private users <span id="RejectRequest">will not be visible</span>. 
           And of course you can filter fetched todos
        </p>
        <h4>User</h4>
        <p>
          <span id="activeOption">Edit your names</span>
        </p>
        <p>
          <span id="activeOption">Edit your info</span>, 
           tell something about you, your work, your relationship status, leave link to you website
        </p>
        <p>
          <span id="activeOption">Edit your privacy settings</span>,
           making your profile private, your info can be exposed only to your followers, and none of your todos will be visible in tag search result
           Moreover users that does not follow you <span id="RejectRequest">will not be able to message you</span>
        </p>
        <p>
          <span id="activeOption">View you followers</span>, by clicking on followers in user section + you can do the same with some other users
        </p>
        <p>
          <span id="activeOption">View users you are following to</span>, by clicking on following in user section + you can do the same with some other users
        </p>
        <p>
          <span id="activeOption">View users you sent requests to</span>, by clicking on Outcoming requests at user section
        </p>
        <p>
          <span id="activeOption">View users that sent you following request</span>, by clicking on Incoming requests at user section
        </p>        
        <p>
          <span id="activeOption">Send follow request</span>,
           by clicking on <FontAwesomeIcon icon={ faUserPlus } id="AcceptRequest"/>
        </p>
        <p>
          <span id="activeOption">Reject someones following request</span>, 
           by clicking on <FontAwesomeIcon icon={ faTimesCircle } id="RejectRequest"/>
        </p>
        <p>
          <span id="activeOption">Cancel request that you have sent to someone</span>
           , by clicking on <FontAwesomeIcon icon={ faTimesCircle } id="RejectRequest"/>
        </p>
        <p>
          <span id="activeOption">Unfollow user</span>
           , by clicking on <FontAwesomeIcon icon={ faUserAltSlash } id="RejectRequest"/>
        </p>
        <p>
          <span id="activeOption">Remove user from followers</span>
           , by clicking on <FontAwesomeIcon icon={ faUserAltSlash } id="RejectRequest"/>
        </p>
        <p>
          <span id="activeOption">Accept incoming requests</span>,
           by clicking on <FontAwesomeIcon icon={ faCheckCircle } id="AcceptRequest"/>
        </p>
        <p>
          <span id="activeOption">Initiate or open existing conversation</span>,
           by clicking on <FontAwesomeIcon icon={ faComment } id="activeOption"/>
        </p>
        <p>
          <span id="activeOption">You can block user</span>,
           by clicking on <FontAwesomeIcon icon={ faCogs }/> in the upper right corner and choosing "Block user" option. The blocked user will not be able to contact you, send request or view your todos somewhere
        </p>
        <p>
          <span id="activeOption">You can unblock user</span>,
           by clicking on <FontAwesomeIcon icon={ faUnlock } id="activeOption"/> in blocked user item
        </p>
        <p>
          <span id="activeOption">You can find user by username</span>, at main page
        </p>
        <h4>Messaging</h4>
        <p>
          <span id="activeOption">Open conversation</span>, by simply clicking on it
        </p>
        <p>
          <span id="activeOption">Filter messages</span>, 
           by author, whether message is liked, its text and the date it was written at
           (this feature is only available on PCs)
        </p>
        <p>
          <span id="activeOption">Write message</span>, 
           by typing it and then clicking on <FontAwesomeIcon icon={ faPaperPlane }/>
        </p>
        <p>
          <span id="activeOption">Edit message</span>, 
           by double clicking on it, choosing <FontAwesomeIcon icon={ faEdit } id="AcceptRequest"/> retyping it 
           and clicking on <FontAwesomeIcon icon={ faCheck } id="AcceptRequest"/>, 
           note that you can only edit messages that you wrote
        </p>
        <p>
          <span id="activeOption">Delete message</span>, 
           by double clicking on it and choosing <FontAwesomeIcon icon={ faTrashAlt } id="RejectRequest"/>, message will disappear permanently, note that you can only delete messages that you wrote
        </p>
        <p>
          <span id="activeOption">Like message</span>, 
          double clicking on message, will TOGGLE like
        </p>
      </div>
    </>
  )
}