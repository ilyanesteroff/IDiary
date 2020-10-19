import React from 'react'
import { BrightThemeContext } from '../../utils/contexts'
import Headline from '../landing-page/Headline'
import Paragraph from '../landing-page/Paragraph'
import Buttons from '../landing-page/Buttons'
import '../../styles/main-unit.css'

export const ViewForVisitors = _ => (
  <BrightThemeContext.Consumer>
    {theme =>
      <div id="main" className={theme ? 'BrightMain'  : 'DarkMain' }>
        <Headline/>
        <Paragraph/>
        <Buttons/>
      </div>
    }
  </BrightThemeContext.Consumer>
)
