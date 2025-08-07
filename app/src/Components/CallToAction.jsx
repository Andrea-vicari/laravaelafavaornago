import React from 'react'
import CtaImg from "../assets/images/web-design-3411373_1280.jpg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CallToAction() {

    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType, buttonType;
    themeType == "ligth" ? bgType = "bg-body-tertiary" : bgType = "bg-black"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? buttonType = "btn-outline-dark" : buttonType = "btn-outline-light"
  return (
    <React.Fragment>
        <section className={"light-typo py-5 call-to-action"+ " " + bgType + " " + textType}>

        <div className="container">

            <div className="row d-flex align-items-center">

                <div className="col-sm-6">
                    <img className="img-fluid rounded-4" src={CtaImg} alt=""/>
                </div>

                <div className="col-sm-5 col-sm-offset-1">

                    <h1>Call to Action Section</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in varius erat.</p>
                    <p>Nam id felis eu felis consequat adipiscing. Suspendisse sit amet faucibus nunc, dignissim vehicula enim. Vestibulum luctus turpis sit amet varius venenatis.</p>

                    <Link className={"btn" + " " + buttonType} to="/contact"><i className="bi bi-arrow-down"></i> Contact us</Link>

                </div>

            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default CallToAction