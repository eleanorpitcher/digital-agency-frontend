import React from 'react'
import ServiceTestimonial from '../pages/ServiceTestimonial'
import { Link } from 'react-router-dom'

function AddTestimonialBtn({service}) {
  return (
    <div className='text-center' style={{backgroundColor: '#F4F1DE' }}>
      <div className='p-5 pb-4'><h3>Have you worked with us before?</h3></div>
        <button className='btn btn-testimonial'><Link to={`/services/add-testimonial`} className='text-decoration-none' style={{color:'black'}}>Leave a testimonial for our {service.name} services</Link></button>
    </div>
  )
}

export default AddTestimonialBtn