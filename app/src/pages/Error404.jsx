import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router';

function Error404() {

  const themeType = useSelector((state) => state.counter.value)
  let bgType, textType, textColor;
  themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>404</h1>
      </div>
    </div>
    <section className={"pt-2 pb-2" + " " + bgType + " " + textType}>

      <div className="container">
          <div className='col-lg-12 pb-5'>
            <div class="text-center py-5 vh-75">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-primary">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" class="btn btn-primary">Go to Homepage</Link>
            </div>

          </div>
      </div>

    </section>

    </>
  )
}

export default Error404
