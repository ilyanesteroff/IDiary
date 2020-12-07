import React, { useEffect } from 'react'
import Chapter from '../Global/Chapter'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'


export default _ => {
  useEffect(_ => window.scrollTo(0, 0), [ ])

  return(
    <> 
      <Chapter 
        label="About Project"
        icon={ faProjectDiagram }
      />
      <p id="Project">
        Initially this was only graphQl todo api, then I decided to make it like a simple social network, I created 3 models related to user and also request, message, follower, blockedUser and conversation models that are intended to manage usage of that social networking efficently. All of the models are written on typeScript, because it incredibly alleviated the proccess of using the power of mongoDB driver's API. then I converted these models to javascript which were applied in endpoints and then I rebuild part of endpoints which were not intended to return any special data I made REST API of them because REST API works a bit faster than graphQl API:)
        In parallel I was working on the frontend of this project. I decided the frontend should be written FROM SCRATCH without applying any specific packages, components or hooks (like bootstrap-reactstrap), because writing things from scratch is always a great practice, in my view, the only things that I used on the frontend are React-Router-DOM and validator JS. Things that were certain about frontend are: there should be 2 themes - bright and dark, because there are a lot of users that enjoy dark themes and vica versa and the frontend should be 100% responsive eg it will look differently on mobile device than it does on computer. 
        Also for a better user experience and satisfaction I decided to add some cool features like attaching pictures to any todos, filtering them editing etc. 
        As result of my almost 2 month hard work the application is done, but here is one thing I regret about in IDiary which is the absence of websockets, that would be nice addition to the messaging and requesting APIs.
      </p>
      <p id="Project">
        <span id="activeOption">Deployed with Netlify</span>
      </p>
    </>
  )
}