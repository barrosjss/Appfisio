import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/logo_appfisio-removebg-preview.png'

function navbar() {
  return (
    <div>
      <nav className="pb-3 mb-4 border-bottom">
        <div className="d-flex align-items-center text-dark text-decoration-none">
          <Link className="navbar-brand" to='/'>
            <img src={logo} alt="Bootstrap" className="me-2" width="93" height="32" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default navbar