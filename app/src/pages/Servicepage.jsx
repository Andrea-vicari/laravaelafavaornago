import React from 'react'
import Services from '../Components/Services';
import CalltoActionSmall from '../Components/CallToActionSmall';
import Prices from '../Components/Prices';

function ServicePage() {
  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Services</h1>
      </div>
    </div>
    <Services />
    <CalltoActionSmall />
    <Prices />
    </>
  )
}

export default ServicePage