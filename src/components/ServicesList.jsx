import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {

  const [services, setServices] = useState('')

  useEffect(()=>{
    axios.get(`http://localhost:5001/services`)
    .then((response)=>{
      setServices(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="p-5" style={{backgroundColor: '#3D405B'}}>
      {!services && <p>No services</p>}
      {services &&
      <div className="row">
        <div className="col">
          <h2 className='fs-1' style={{color: '#F4F1DE'}}>Our Services</h2>
          {services.map((oneService)=>{
            return(
              <div key={oneService.id} className='col-6'>
                <div className="row px-5">
                  <Link to={`/services/${oneService.id}`} className='text-decoration-none'><h3 className='card' style={{backgroundColor: '#E07A5F', color: '#F4F1DE'}}>{oneService.name}</h3></Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      }
    </div>
  )
}

export default Services