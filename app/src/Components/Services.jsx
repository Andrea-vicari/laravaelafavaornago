import React from 'react'
import { useSelector } from 'react-redux'

function Services() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    return (
        <React.Fragment>
            <section id="services" className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">

                    <h1 className="section-title">Our Services</h1>
                    <p className="section-description">We create awesome Websites and Mobile Apps, the perfect solution for your project.</p>

                    <div className="row services">
                        <div className="col-sm-3 item text-center">
                            <div className="icon bg-primary">
                                <i className="bi bi-flag"></i>
                            </div>
                            <h3>Branding</h3>
                            <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>
                        </div>
                        <div className="col-sm-3 item text-center">

                            <div className="icon bg-primary">
                                <i className="bi bi-pen"></i>
                            </div>
                            <h3>Design</h3>
                            <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                        </div>
                        <div className="col-sm-3 item text-center">

                            <div className="icon bg-primary"><i className="bi bi-code"></i></div>
                            <h3>Development</h3>
                            <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                        </div>
                        <div className="col-sm-3 item text-center">
                            <div className="icon bg-primary"><i className="bi bi-rocket"></i></div>
                            <h3>Deployment</h3>
                            <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>
                        </div>
                    </div>

                    <h1 className="subsection-title">Our Process</h1>
                    <p className="subsection-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis suscipit molestias amet in officiis impedit esse ipsum! Magni blanditiis ab molestias, doloremque doloribus ipsa error quidem quis deserunt sed.</p>

                    <div className="process-box">

                        <ul className="process-list">
                            <li>
                                <p className="icon mb-3"><i className="bi bi-search fa-fw"></i></p>
                                <h4>Research &amp; Analysis</h4>
                            </li>
                            <li>
                                <p className="icon mb-3"><i className="bi bi-pen fa-fw"></i></p>
                                <h4>Design</h4>
                            </li>
                            <li>
                                <p className="icon mb-3"><i className="bi bi-code fa-fw"></i></p>
                                <h4>Development</h4>
                            </li>
                            <li>
                                <p className="icon mb-3"><i className="bi bi-check-circle fa-fw"></i></p>
                                <h4>Testing</h4>
                            </li>
                            <li className="colored">
                                <p className="icon mb-3 bg-primary"><i className="bi bi-globe fa-fw"></i></p>
                                <h4>Publish</h4>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}

export default Services