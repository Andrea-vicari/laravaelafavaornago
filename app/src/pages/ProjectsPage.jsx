import React from 'react'
import ProjectsLink from '../Components/ProjectsLink';


function ProjectsPage() {
  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Projects</h1>
      </div>
    </div>
    <ProjectsLink />
    </>
  )
}

export default ProjectsPage