import React from 'react'
import { Link } from "react-router";
import { useLocation } from 'react-router';
import logo from "../../assets/images/logo-prova.svg"



function Menu() {


  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
            <Link className="navbar-brand d-flex" to={'/'}>
            <img src={logo} style={{width:200}}/>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse pt-2" id="navbarCollapse">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-6" aria-current="page" to={'/'}>Home</Link>
              </li>
              


            </ul>

            
         
         
            </div>
        </div>
        </nav>
        </div>
    </>
  )
}

export default Menu

