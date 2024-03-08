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
          <h1>{service.name}</h1>
          <h2>What is {service.name}?</h2>
          <p>{service.description}</p>
          {service.offering_and_approach.map((oneOffering)=>{
            return (
              <div key={service.id}>
                {oneOffering}
              </div>
            )
          })}
          <Testimonials service={service}></Testimonials>
        </div>
      }
    </div>
  )
}

export default ServiceDetails