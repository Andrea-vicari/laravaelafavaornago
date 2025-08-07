import React from 'react'
import {useState} from 'react';
import { Link } from "react-router-dom";

function Footer() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <div className='container-fluid bg-primary py-4'>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="col-md-4 mb-0 text-white">© 2024 Company, Inc</p>

          <Link className="navbar-brand d-flex" to={'/'}>
            <span className='text-black fs-1'>AS<span className='text-white'>C</span>AR</span>
            </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/aboutus" className="nav-link px-2 text-white">About</Link></li>
            <li className="nav-item"><Link to="/faqpage" className="nav-link px-2 text-white">FAQs</Link></li>
            <li className="nav-item"><Link to="/privacy" className="nav-link px-2 text-white">Privacy</Link></li>
          </ul>
          <button id="myBtn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='btn btn-sm btn-outline-secondary'>
            <i className="bi bi-arrow-bar-up"></i>
          </button>
        </footer>
      </div>

    </div>
  )
}

export default Footer