import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ServiceDetails from './ServiceDetails'

function Services() {

  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5001/services`)
    .then((response)=>{
      setServices(response.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])

  return (
    <div>
      {services.map((oneService) => {
        return (
          <div key={oneService.slug}>
            <h1>{oneService.name}</h1>
            <p>{oneService.tagline}</p>
            <Link to={`/services/${oneService.id}`} element={<ServiceDetails></ServiceDetails>}>Learn More</Link>
          </div>
        )
      })}
    </div>
    
  )
}

export default Services