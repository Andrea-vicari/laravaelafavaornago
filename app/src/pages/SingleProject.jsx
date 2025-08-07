import React from 'react'
import { Link, useLocation } from 'react-router';
import CallToActionSmall from "../Components/CallToActionSmall"
import { useSelector } from 'react-redux'
import projectsList from '../assets/works/portfolio.json';

function SingleProject() {

  // Dark light logics
	const themeType = useSelector((state) => state.counter.value)
  let bgType;
  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  // End dark light logics

  // Click State logics
	var clicked = useLocation();
  let titleProj  = clicked.state
	console.log(titleProj.clicked)
  var whatClicked = titleProj.clicked;

    // Filter the project JSON by The title
    var filterProj = []

    projectsList.forEach(function callback(value, index) {
      value.title == whatClicked ? filterProj.push(value) : false
    });

	return (
	<>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>{titleProj.clicked}</h1>
      </div>
    </div>
	<section id="portfolio-details" className={"portfolio-details py-5"+ " " + bgType}>
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6">
            <div>
                <img src={filterProj[0].thumbImage} className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {filterProj[0].category}</li>
                <li><strong>Client</strong>: {filterProj[0].client}</li>
                <li><strong>Project URL</strong>: <a href={filterProj[0].extLink} target='_blank'>{filterProj[0].extLink}</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{filterProj[0].title}</h2>
              <p>{filterProj[0].description}</p>

            </div>
          </div>

        </div>

      </div>

    </section>
	<CallToActionSmall />
	</>
	)
}

export default SingleProject
