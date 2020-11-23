import React from 'react'
import { faReact, faNodeJs, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCog, faRoute, faPassport, faLock, faNetworkWired, faCheck, faKeyboard, faBolt } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default _ => {
  return(
    <>
      <h1>
        Tech stack
        <FontAwesomeIcon
          icon={ faCog }
          id="h1-Icon"
        />
      </h1>
      <div id="StackLists">
        <div id="StackList">
          <h2>Backend</h2>
          <ul>
            <li>
              <h4>
                JavaScript
                <span id="activeOption">
                  <FontAwesomeIcon icon={faJs}/>
                </span>
              </h4>
              <p id="overflowItem">
                Most popular programming language by the size of community, extremely versatile, it is used in backend, web-frontend, desktop, mobile, game, developments, the IDiary is 95% Javascript project
              </p>
            </li>
            <li>
              <h4>
                TypeScript
                <span id="activeOption">
                  <FontAwesomeIcon icon={faKeyboard}/>
                </span>
              </h4>
              <p id="overflowItem">
                The strict syntactical superset of JavaScript that also adds static typing to the JavaScript, has its own compiler, in IDiary the database models and related to it stuff are written on Typescript
              </p>
            </li>
            <li>
              <h4>
                NodeJS
                <span id="activeOption">
                  <FontAwesomeIcon icon={faNodeJs}/>
                </span>
              </h4>
              <p id="overflowItem">
                The great runtime environment that executes JS on machine. Its peculiar asyncronous nature orchestrates requests through the event loop in async mode which consumes significantly less threads and resources
              </p>
            </li>
            <li>
              <h4>
                ExpressJS
                <span id="activeOption">
                  <FontAwesomeIcon icon={faBolt}/>
                </span>
              </h4>
              <p id="overflowItem">
                The popular and trusted nodejs web-framework, that allows us to write less code than we would do using plain nodejs API. The framework is used for some of the endpoints which do not intended to return lots of data
              </p>
            </li>
            <li>
              <h4>
                MongoDB
                <span id="activeOption">
                  <FontAwesomeIcon icon={faDatabase}/>
                </span>
              </h4>
              <p id="overflowItem">
                The great, scalable, No-SQL database for modern applications, which work fine in combination with nodejs, because its documents are easy to convert to JSON objects which is native for JS
              </p>
            </li>
            <li>
              <h4>
                GraphQl
                <span id="activeOption">
                  <FontAwesomeIcon icon={faNetworkWired}/>
                </span>
              </h4>
              <p id="overflowItem">
                The awesome query and manipulation language for APIs, it ensures an incredible flexibility that prevents networks from overloading, in IDiary it is used for certain queries and manipulations
              </p>
            </li>
            <li>
              <h4>
                JSON-WEB-Token
                <span id="activeOption">
                  <FontAwesomeIcon icon={faPassport}/>
                </span>
              </h4>
              <p id="overflowItem">
                The incredibly reliable technology for rest-API authentication, that encodes certain data, such as user ID and username in token, which is used like a passport in application
              </p>
            </li>
            <li>
              <h4>
                BycryptJS                
                <span id="activeOption">
                  <FontAwesomeIcon icon={faLock}/>
                </span>
              </h4>
              <p id="overflowItem">
                The minimalistic and reliable cryptographic library for encoding sensetive data both in synchronous and asynchronous ways, in projects it is used to encrypt passwords for database
              </p>
            </li>
          </ul>
        </div>
        <div id="StackList">
          <h2>Frontend</h2>
          <ul>
            <li>
              <h4>
                ReactJS
                <span id="activeOption">
                  <FontAwesomeIcon icon={faReact}/>
                </span>
              </h4>
              <p id="overflowItem">
                The greatest and most popular in industry library for powerful and versatile UI's, maintained by facebook and community, which represents every visible part of UI as a component with its own lifecycle, which can be reused over and over again in your application.
              </p>
            </li>
            <li>
              <h4>
                React-Router-DOM
                <span id="activeOption">
                  <FontAwesomeIcon icon={faRoute}/>
                </span>
              </h4>
              <p id="overflowItem">
                The usefull library for react applications which implements web-app routing logic in components, ensures better user experience and does not reloads the website whenever the URL changes
              </p>
            </li>
            <li>
              <h4>
                CSS
                <span id="activeOption">
                  <FontAwesomeIcon icon={faCss3}/>
                </span>
              </h4>
              <p id="overflowItem">
                The Cascading StyleSheets, thing that defines how the UI will look like
              </p>
            </li>
            <li>
              <h4>
                HTML
                <span id="activeOption">
                  <FontAwesomeIcon icon={faHtml5}/>
                </span>
              </h4>
              <p id="overflowItem">
                The HyperMarkupTextLanguage, the base of every UI application
              </p>
            </li>
            <li>
              <h4>
                ValidatorJS
                <span id="activeOption">
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
              </h4>
              <p id="overflowItem">
                Great and reliable library for data validating in all kinds of JavaScript applications, used for validating emails, phone numbers and some input values 
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}