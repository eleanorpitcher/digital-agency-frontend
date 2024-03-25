import React from 'react'

function ServiceTestimonial() {

    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <div>
        <div>
        <h1 className='text-center p-5' style={{backgroundColor: '#D6CC99', color: 'white'}}>Leave us a testimonial</h1>
        <div className='p-5 d-flex flex-column align-items-center'>
            <form onSubmit={handleSubmit} style={{width: '50vw'}}>
                <div className="row">
                    <h4 className='mt-2'>Which service did you use? Select all that apply.</h4>
                    <div className='row pb-4'> 
                        <label className='mt-2'>
                            <input type="checkbox" value="SEO" className='mx-2'/>SEO
                        </label>
                        <label className='mt-2'>
                            <input type="checkbox" value="Building Backlinks" className='mx-2'/>Building Backlinks
                        </label>
                        <label className='mt-2'>
                            <input type="checkbox" value="Google Search Ads" className='mx-2'/>Google Search Ads
                        </label>
                        <label className='mt-2'>
                            <input type="checkbox" value="Branding" className='mx-2'/>Branding
                        </label>
                        <label className='mt-2'>
                            <input type="checkbox" value="Display Ads" className='mx-2'/>Display Ads
                        </label>
                        <label className='mt-2'>
                            <input type="checkbox" value="Social Media" className='mx-2'/>Social Media
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <h5 className='mt-2'>First Name<star>*</star>:</h5>
                    <input type="text"/>
                </div>
                <div className="row">
                    <h5 className='mt-2'>Last Name<star>*</star></h5>
                    <input type="text"/>
                </div>
                <div className='row'>
                    <h5 className='mt-2'>Email<star>*</star></h5>
                    <input type="text" />
                </div>
                <div className="row">
                    <h5 className='mt-2'>Company</h5>
                    <input type="text" />
                </div>
                <div className="row">
                    <h5 className='mt-2'>Job Title</h5>
                    <input type="text" />
                </div>
                <div className="row">
                    <h5 className='mt-2'>Your Testimonial<star>*</star></h5>
                    <input type="text" style={{height:'200px'}} />
                </div>
            </form>
            </div>
            <div className='text-center'><button className='btn btn-default m-5' style={{border: 'black 1px solid'}}>Submit</button></div>
        </div>
    </div>    
  )
}

export default ServiceTestimonial