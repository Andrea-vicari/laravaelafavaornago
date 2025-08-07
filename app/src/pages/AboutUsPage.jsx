import React from 'react'
import Features from '../Components/Features';
import Team from '../Components/Team';
function AboutUsPage() {
  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>About Us</h1>
      </div>
    </div>
    <Features />
    <Team />
    </>
  )
}

export default AboutUsPage