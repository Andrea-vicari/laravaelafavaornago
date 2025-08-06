import React from 'react';
import { Routes, Route, Navigate} from 'react-router';
import ScrollToTop from './Components/ScrollToTop';
import Homepage from './Components/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {




  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
        <Route path="/" element={<Homepage />} />

        </Routes>
        </ScrollToTop>

    </React.Fragment>

  )
}

export default App
