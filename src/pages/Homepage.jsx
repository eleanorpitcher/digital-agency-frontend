import ServicesList from '../components/ServicesList'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className=' flex-column' style={{backgroundColor: '#81B29A' }}>
        <div className="row">
            <h1 className='text-uppercase fw-bold p-5 mt-5 h1-homepage' style={{color:'#F4F1DE', fontSize: '5rem' }}>Your global digital marketing agency</h1>
        </div>
        <div className="row">
            <h2 className='text-uppercase' style={{color: '#E07A5F'}}></h2>
        </div>
        <div className="row">
          <p className='fs-3 px-5' style={{color: '#F4F1DE'}}>Elevate your brand's online presence and drive results with Elevate Digital Marketing Agency's strategic solutions.</p>
        </div>
        <div className="pt-5" >
          <div className="row p-5" style={{backgroundColor: '#F4F1DE'}}>
            <p className='fs-2 text-center p-5' style={{color: '#3D405B'}}>We're more than just marketers – we're your strategic partners in success. Let us guide you through the ever-evolving digital landscape with innovative strategies and personalized solutions that make an impact.</p>
            <div className="row d-flex text-center space-around">
              <div className="col-6">
                <Link to='/about'><button className="col-4 fs-4 p-3 btn-homepage" style={{border: 'none', borderRadius: '5px', backgroundColor: '#3D405B', color: '#F4F1DE'}}>About Elevate</button></Link>
              </div>
              <div className="col-6">
                <Link to='/contact'><button className="col-4 fs-4 p-3 btn-homepage" style={{border: 'none', borderRadius: '5px', backgroundColor: '#E07A5F', color: '#F4F1DE'}}>Work with us</button></Link>
              </div>
              
            </div>
          </div>
        </div>

        <ServicesList/>
    </div>
  )
}

export default Homepage