import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <nav className='navbar navbar-expand-lg p-4' style={{backgroundColor: '#E07A5F'}}>
      <div className='container-fluid' >
        <Link to='/' className="navbar-brand fw-bold" style={{color: '#3D405B'}}>ELEVATE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li className="nav-item">
            <Link to="/services" className="nav-link px-4 text-nowrap fw-bold" style={{color: '#3D405B'}}>SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-4 text-nowrap fw-bold" style={{color: '#3D405B'}}>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link px-4 text-nowrap fw-bold" style={{color: '#3D405B'}}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar