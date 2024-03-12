import React from 'react'
import homePageImage from '../assets/elevate-agency-bg.jpeg'

function About() {
  return (
    <div>
      <div className='bg-img' style={{position: 'relative'}}>
        <div className="d-flex" style={{backgroundImage: `url(${homePageImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'none'}}></div>
          <div className='container-fluid' style={{position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <div className="row justify-content-center">
              <h1 className='text-uppercase text-center' style={{position: 'absolute', fontSize: '8rem', color: '#3D405B'}}>We're <strong>Elevate</strong>. <br></br>Your Marketing Partner.</h1>
            </div>
          </div>
        </div>

      <div className='p-5' style={{backgroundColor: '#81B29A'}}>
        <h2 className='text-uppercase text-center' style={{fontSize: '5rem'}}>Turning Clicks into Clients: Your Digital Success Partner</h2>
        <div className="row">
          <div className="col text-center fs-5 px-5">
            <p style={{maxWidth:'50%'}}>Welcome to our digital marketing agency, where innovation meets expertise to propel your online presence to new heights. At Elevate, we specialize in crafting tailored digital strategies that resonate with your audience and drive tangible results for your business. With a team of seasoned professionals well-versed in the latest trends and technologies, we pride ourselves on delivering comprehensive solutions across various digital platforms.</p> 
            <p style={{maxWidth:'50%'}}>Whether you're a startup looking to establish a solid online presence or an established brand seeking to expand your reach, we've got you covered. From search engine optimization (SEO) and social media management to pay-per-click (PPC) advertising and content creation, our holistic approach ensures that every aspect of your digital marketing strategy is optimized for success. At Elevate, we're not just your service provider – we're your strategic partner, dedicated to helping you achieve your goals and surpassing your expectations in the ever-evolving digital landscape.</p>      </div>
        </div>
      </div>
    </div>
  )
}

export default About