import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='text-center display-flex justify-content-center' style={{marginTop: '35vh', marginBottom: '35vh'}}>
        <h1>Oops! This page doesn't exist.</h1>
        <p>We can't seem to find the page you're looking for. Go back to the previous page, or head to our <Link to="/">homepage</Link>.</p>
    </div>
  )
}

export default Error