import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/logo_appfisio-removebg-preview.png'

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img src={logo} alt="Bootstrap" width="80" height="24" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default navbar