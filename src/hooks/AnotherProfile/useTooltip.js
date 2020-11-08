import React from 'react'
import Tooltip from '../../components/profile-page/Tooltip'


export default (component, withToolTip, tooltipLabel, loading) => {
  let output 

  withToolTip
    ?  output = <div className={ !loading ? 'tooltip' : 'noTooltip' }>
                  { component }
                  <Tooltip content={tooltipLabel}/>
                </div>
    :  output = component

  return output
}