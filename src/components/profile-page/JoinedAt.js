import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { shortFormatedMonths as months} from '../../utils/months'


export default ({date}) => {
  const formatedDate = `  Joined IDiary at ${months[new Date(date).getUTCMonth()]} ${ new Date(date).getUTCFullYear()}`

  return(
    <h4>
      <FontAwesomeIcon icon={faCalendar}/>
      {formatedDate}
    </h4>
  )
}