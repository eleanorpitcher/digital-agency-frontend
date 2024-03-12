import ServicesList from '../components/ServicesList'
import { Link } from 'react-router-dom'
import sustainableOffice from '../assets/sustainable-office.jpeg'

function Homepage() {
  return (
    <div className='' style={{backgroundColor: '#D6CC99'}}>
        <div className="row vh-100 align-content-center">
          <div className="col">
            <h1 className='text-uppercase fw-bold p-5 mt-5 homepage-h1' style={{color:'#F4F1DE', fontSize: '7rem'}}>Your green digital marketing agency</h1>
            </div>
        </div>
        <div className="pt-5" >
          <div className="row p-5 align-items-center" style={{backgroundColor: '#FDE5D4'}}>
            <div className="col-6">
              <img src={sustainableOffice} style={{maxWidth: '100%', minHeight: '100%'}} />
            </div>
            <div className="col-6">
              <div className="row">
                <p className='fs-2 text-center p-5' style={{color: '#001524'}}>We're more than just marketers – we're your strategic partners in success. Let us guide you through the ever-evolving digital landscape with innovative strategies and personalized solutions that make an impact.</p>
              </div>
              <div className="row text-center">
                <div className="col-6">
                <Link to='/about'><button className="fs-4 p-3 btn-homepage" style={{border: 'none', borderRadius: '5px', backgroundColor: '#D6CC99', color: '#001524'}}>About Elevate</button></Link>
                </div>
                  <div className="col-6">
                    <Link to='/contact'><button className="fs-4 p-3 btn-homepage" style={{border: 'none', borderRadius: '5px', backgroundColor: '#D6CC99', color: '#001524'}}>Work with us</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServicesList/>
    </div>
  )
}

export default Homepage