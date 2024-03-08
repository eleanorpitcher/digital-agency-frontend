import React from 'react'

function Contact() {

  function handleSubmit(){
    
  }


  return (
    <div className='m-5 d-flex flex-column card p-5 col-7'>
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
      </div>
      <button className='btn btn-outline-dark col-3 text-center'>Submit</button>
    </div>
  )
}

export default Contact