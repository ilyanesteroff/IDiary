import React from 'react'
import { faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { faBolt, faDatabase, faLock, faNetworkWired, faPassport } from '@fortawesome/free-solid-svg-icons'
import StackItem from './StackItem'


export default _ => (
  <div id="StackList">
    <h2>Backend</h2>
    <ul>
      <StackItem label="JavaScript" icon={ faJs }>
        Most popular programming language by the size of community, extremely versatile, it is used in backend, web-frontend, desktop, mobile, game, developments, the IDiary is 95% Javascript project
      </StackItem>
      <StackItem label="TypeScript" icon={ faKeyboard }>
          The strict syntactical superset of JavaScript that also adds static typing to the JavaScript, has its own compiler, in IDiary the database models and related to it stuff are written on Typescript
      </StackItem>
      <StackItem label="NodeJS" icon={ faNodeJs }>
        The great runtime environment that executes JS on machine. Its peculiar asyncronous nature orchestrates requests through the event loop in async mode which consumes significantly less threads and resources
      </StackItem>
      <StackItem label="ExpressJS" icon={ faBolt }>
        The popular and trusted nodejs web-framework, that allows us to write less code than we would do using plain nodejs API. The framework is used for some of the endpoints which do not intended to return lots of data
      </StackItem>
      <StackItem label="MongoDB" icon={ faDatabase }>
        The great, scalable, No-SQL database for modern applications, which work fine in combination with nodejs, because its documents are easy to convert to JSON objects which is native for JS
      </StackItem>
      <StackItem label="GraphQL" icon={ faNetworkWired }>
        The awesome query and manipulation language for APIs, it ensures an incredible flexibility that prevents networks from overloading, in IDiary it is used for certain queries and manipulations
      </StackItem>
      <StackItem label="JSON-WEB-Token" icon={ faPassport }>
        The incredibly reliable technology for rest-API authentication, that encodes certain data, such as user ID and username in token, which is used like a passport in application
      </StackItem>
      <StackItem label="BycryptJS" icon={ faLock }>
        The minimalistic and reliable cryptographic library for encoding sensetive data both in synchronous and asynchronous ways, in projects it is used to encrypt passwords for database
      </StackItem>
    </ul>
  </div>
)