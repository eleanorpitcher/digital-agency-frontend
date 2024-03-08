import axios from 'axios'
import { useEffect, useState } from 'react'

function Testimonials({service}) {

    const [testimonials, setTestimonials] = useState([])

    useEffect(()=>{
        setTestimonials(service.testimonials)
    },[service])

    // useEffect(() => {
    //     console.log(testimonials);
    // }, [testimonials]);


  return (
    <div>
        <div className="row">
            <h1>Testimonials</h1>
        </div>
        <div className="row">
            {!testimonials && <p>no testimonials</p>}
            {testimonials && (
                <div>
                    {testimonials.map((oneTestimonial, index) => {
                        return (
                            <div key={index}>
                                <h4>{oneTestimonial.username}</h4>
                                <h5>{oneTestimonial.testimonialBody}</h5>
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