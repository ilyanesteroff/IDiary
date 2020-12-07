import React from 'react'
import { faCss3, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faRoute, faImages } from '@fortawesome/free-solid-svg-icons'
import StackItem from './StackItem'


export default _ => (
  <div id="StackList">
    <h2>Frontend</h2>
    <ul>
      <StackItem label="ReactJS" icon={ faReact }>
        The greatest and most popular in industry library for powerful and versatile UI's, maintained by facebook and community, which represents every visible part of UI as a component with its own lifecycle, which can be reused over and over again in your application. 
      </StackItem>
      <StackItem label="React-Router-DOM" icon={ faRoute }>
        The usefull library for react applications which implements web-app routing logic in components, ensures better user experience and does not reloads the website whenever the URL changes
      </StackItem>
      <StackItem label="CSS" icon={ faCss3 }>
        The Cascading StyleSheets, thing that defines how the UI will look like
      </StackItem>
      <StackItem label="HTML" icon={ faHtml5 }>
        The HyperMarkupTextLanguage, the base of every UI application
      </StackItem>
      <StackItem label="ValidatorJS" icon={ faCheck }>
        The great and reliable library for data validating in all kinds of JavaScript applications, used for validating emails, phone numbers and some input values 
      </StackItem>
      <StackItem label="React-image-crop" icon={ faImages }>
        An incredibly usefull image-croping packege that is used for avatar image croping in thes project
      </StackItem>
    </ul>
  </div>
)