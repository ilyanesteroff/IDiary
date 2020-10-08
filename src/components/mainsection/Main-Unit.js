import React, { useContext } from 'react'
import { BrightThemeContext } from '../../utils/contexts'
import Headline from '../landing-page/Headline'
import Paragraph from '../landing-page/Paragraph'
import Buttons from '../landing-page/Buttons'
import '../../styles/main-unit.css'

export const ViewForVisitors = _ => {
  const Theme = _ => useContext(BrightThemeContext)
 
  return (
    <div id="main" className={Theme() ? 'BrightMain'  : 'DarkMain' }>
      <Headline theme={Theme()}/>
      <Paragraph theme={Theme()}/>
      <Buttons theme={Theme()}/>
    </div>
  )
}  