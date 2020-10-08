import React from 'react'

export default ({theme}) => (
  <p id="para" className={theme ? 'BrightParagraph' : 'DarkParagraph' }>
    <span className="pSpan">TooDooDoo is the best way to share todos with your friends </span>
    <span className="pSpan">TooDooDoo also has a messenger, so you can connect with everyone </span>
    <span className="pSpan">
      <em>To get started create an account or signup </em>
    </span>
  </p>
)