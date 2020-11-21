import React from 'react'
import { Link } from 'react-router-dom'


export default _ => (
  <div id="FormItems-li">
    <h3>About</h3>
    <div id="FooterItem">
      <Link to="/project">Project</Link>
      <Link to="/stack">Stack</Link>
    </div>
  </div>
)