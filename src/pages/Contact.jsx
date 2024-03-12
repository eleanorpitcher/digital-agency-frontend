import React from 'react'
import Location from '../components/Location'

function Contact() {

  function handleSubmit(e){
    e.preventDefault()

  }


  return (
    <div className='row'>
      <div className="col-6">
        <form className='m-5 d-flex flex-column card p-5' onSubmit={handleSubmit}>
          <h1>Tell us about you</h1>
          <h3>What services do you require?</h3>
          <input type="text" />
          <h3>Budget Range</h3>
          <input type="number"/>
          <div className="row">
            <div className="col-6">
              <h3>First Name</h3>
              <input type="text" />
            </div>
            <div className="col-6">
              <h3>Second Name</h3>
              <input type="text" />
            </div>
            <div className="row">
              <div className="col-6">
                <h3>Email</h3>
                <input type="text" />
              </div>
              <div className="col-6">
                <h3>Phone Number</h3>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h3>Company</h3>
                <input type="text" />
              </div>
            </div>
          </div>
          <button className='btn btn-outline-dark col-3 mt-4 text-center'>Submit</button>
        </form>
      </div>
      <div className='col-6 mt-5'>
      <Location/>
      </div>
    </div>
  )
}

export default Contact