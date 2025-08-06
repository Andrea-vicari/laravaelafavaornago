import React from 'react';
import { Routes, Route, Navigate} from 'react-router';
import ScrollToTop from './Components/ScrollToTop';
import Prova from './Components/Prova';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {




  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
        <Route path="/" element={<Prova />} />

        </Routes>
        </ScrollToTop>

    </React.Fragment>

  )
}

export default App
