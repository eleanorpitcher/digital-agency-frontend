import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Testimonials from '../components/Testimonials'

function ServiceDetails() {

  const {slug} = useParams()
  console.log(useParams())
  const [service, setService] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5001/services/${slug}`)
    .then((response)=>{
      setService(response.data)
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [slug])
  

  return (
    <div>
      {!service && <p>Loading...</p>}
      {service && 
        <div>
          <div className="row"style={{backgroundColor: '#D6CC99' }}>
            <h1 className='p-5 text-center text-uppercase fw-bold' style={{fontSize:'5rem',color: '#001524'}}>{service.name}</h1>
          </div>
          <div className="row p-5"style={{backgroundColor: '#F4F1DE' }}>
            <div className="col-8">
              <h2>What is {service.name}?</h2>
                <p className='fs-5'>{service.description}</p>
                <h3>What makes our approach unique?</h3>
                {service.offering_and_approach.map((oneOffering)=>{
                  return (
                    <div key={service.id}>
                      <ul>
                        <li className='fs-5'>{oneOffering}</li>
                      </ul>
                    </div>
                  )
                })}
            </div>
          </div>
          <Testimonials service={service}></Testimonials>
        </div>
      }
    </div>
  )
}

export default ServiceDetails