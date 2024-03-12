import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Navbar() {

  const [services, setServices] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5001/services`)
    .then((response) =>{
        setServices(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
},[])

console.log(services)

function handleDropdownToggleClick(e){
  e.preventDefault();
}

  return (
    <nav className='navbar navbar-expand-lg p-4' style={{backgroundColor: '#445D48'}}>
      <div className='container-fluid'>
        <Link to='/' className="navbar-brand fw-bold" style={{color: '#FDE5D4'}}>ELEVATE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li className='nav-item dropdown'>
            <a href="/services" className='nav-link dropdown-toggle fw-bold' data-bs-toggle="dropdown" onClick={handleDropdownToggleClick} style={{color: '#FDE5D4' }}>SERVICES</a>
            {services.length > 0 && (
            <ul className='dropdown-menu' style={{backgroundColor: '#3D405B'}}>
            {services.map((oneService)=>(
              <li key={oneService.id}><a style={{color: '#F4F1DE'}} className="dropdown-item" href={`/services/${oneService.id}`}>{oneService.name}</a></li>
            ))}
          </ul>
          )}
            
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-4 text-nowrap fw-bold" style={{color: '#FDE5D4'}}>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link px-4 text-nowrap fw-bold" style={{color: '#FDE5D4'}}>CONTACT</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar