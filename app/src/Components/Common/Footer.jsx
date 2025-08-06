import React from 'react'
import {useState} from 'react';
import { Link } from "react-router";
import logo from "../../assets/images/logo-prova.svg"

function Footer() {

  // Scroll to top function
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
     <footer className="py-3 my-4">
       <ul className="nav justify-content-center border-bottom pb-3 mb-3">
         <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
         <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
         <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
         <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
         <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
       </ul>
       <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
     </footer> 
      

  )
}

export default Footer
