import { useState, useLayoutEffect } from 'react'
import { faUser, faUserGraduate, faUserMd, 
    faUserAstronaut, faUserNinja, faUserSecret, 
    faUserCheck, faUserNurse 
} from '@fortawesome/free-solid-svg-icons'


export default _ => {
  const [ icons ] = useState([faUser, faUserGraduate, faUserMd, 
    faUserAstronaut, faUserNinja, faUserSecret, 
    faUserCheck, faUserNurse ])
  const [ iconToShow, setIconToShow ] = useState(0)
    
  useLayoutEffect(_ => {
    setIconToShow(Math.floor((Math.random() * 8)))
  }, [])

  return [ icons[iconToShow] ]
}