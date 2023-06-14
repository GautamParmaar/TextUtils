import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
 
    <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" href="/none">{props.title}</Link>
      <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="hrefggle navigation">
        <span className="navbar-hrefggler-icon"></span>
      </buthrefn>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        
        <li className="nav-item">
        <Link className="nav-link" to="/none">Home</Link>
        
        </li>
          
          

          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
            
            </li>
            
           
            </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.hrefggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </nav></div>
  )
}
Navbar.propTypes={title:PropTypes.string,
aboutText:PropTypes.string} //navbar.propTypes is for  defining property of props
Navbar.defaultProps={
    title:'Title...',
    aboutText:'None...'
}