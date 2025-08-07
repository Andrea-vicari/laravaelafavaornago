import React from 'react'
import Resume from "../assets/pdf/Resume.pdf"
import { Link } from 'react-router'

function CallToActionSmall() {
    return (
        <section className="bg-network py-5">

            <div className="container">

                <div className="row d-flex align-items-center">
                    <div className="col-md-9">
                        <h4 className='fs-3 fw-bolder text-black mb-0'>Contact Us</h4>
                        <p className='fs-5 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit sed ullam modi at unde consequuntur porro ut eum excepturi dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <p className="text-center">
                            <Link className="btn btn-outline-dark btn-lg p-3" to="/contact">
                                <i className="fs-3 bi bi-envelope"></i> Contact
                            </Link>
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CallToActionSmall
