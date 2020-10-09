import React from 'react'

export default ({theme}) => (
  <div className="formPage">
    <h1 id="headline" className={`${theme ? 'Bright' : 'Dark'}Headline`}>
      It seems like the link is inactive
    </h1>
    <form className={`${theme? 'Bright': 'Dark'}LoginForm`}>
      <p>
        You have either already reset password or the link is overdued, so you can request password reset again
      </p>
      <a href="/password-reset" id="buttonLikeAnchor"> 
        Request password reset
      </a>
    </form>
  </div>
)