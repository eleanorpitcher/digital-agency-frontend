import axios from 'axios'
import { useEffect, useState } from 'react'
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
    <div className="p-5" style={{backgroundColor: '#BBC3A4'}}>
      {!services && <p>No services</p>}
      {services &&
      <div className="row" >
        <div className="col-md-12 mb-4">
          <h2 className='fs-1 text-center' style={{color: '#F4F1DE'}}>Our Services</h2>
        </div>
          {services.map((oneService)=>{
            return(
              <div key={oneService.id} className='col-md-4'>
                <div className='card mb-2' style={{backgroundColor: '#445D48', color: '#F4F1DE'}}>
                  <div>
                    <h3 className='pb-5 px-3 pt-2'>{oneService.name}</h3>
                  </div>
                  <div className="arrow-btn" style={{position: 'absolute', bottom: 0, right: 0, padding: '20px'}}>
                    <Link to={`/services/${oneService.id}`}><i className='bi bi-arrow-right-circle fs-1 text-light'></i></Link>
                  </div>
               </div>
              </div>                
            )
          })}
        </div>
      }
    </div>
  )
}

export default Services