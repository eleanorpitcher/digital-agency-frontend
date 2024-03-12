import axios from 'axios'
import { useEffect, useState } from 'react'

function Testimonials({service}) {

    const [testimonials, setTestimonials] = useState([])

    useEffect(()=>{
        setTestimonials(service.testimonials)
    },[service])

  return (
    <div className='p-5' style={{backgroundColor: '#445D48', color: '#F4F1DE'}}>
        <div className="row">
            <h1 className='text-center mb-5 fw-bold'>TESTIMONIALS</h1>
        </div>
        <div className="row">
            {!testimonials && <p>no testimonials</p>}
            {testimonials && (
                <div>
                    {testimonials.map((oneTestimonial, index) => {
                        return (
                            <div key={index}>
                                <div className="row mb-4 align-items-center">
                                    <div className="col-3">
                                        <h4>{oneTestimonial.username}</h4>
                                    </div>
                                    <div className="col-9">
                                        <h5 style={{fontStyle: 'italic'}}>"{oneTestimonial.testimonialBody}"</h5>
                                    </div>
                                </div>
                            </div>
                            )
                    })}
                </div>
            )}
            
            </div>
        </div>
  );
}

export default Testimonials