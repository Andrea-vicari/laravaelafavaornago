import React from 'react';
import { Routes, Route} from 'react-router';

import NavbarFixedTop from './Components/Common/NavbarFixedTop';
import Footer from './Components/Common/Footer';
import ScrollToTop from './Components/ScrollToTop';
import HomepageOne from './pages/HomepageOne';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/Servicepage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import PrivacyPage from './pages/PrivacyPage';
import FaqPage from './pages/FaqPage';
import SinglePost from './pages/SinglePost';
import SingleProject from './pages/SingleProject';
import Error404 from './pages/Error404';

function App() {

  return (
    <React.Fragment>
      <NavbarFixedTop />
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<HomepageOne />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/faqpage" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/singlepost" element={<SinglePost />} />
            <Route path="/singleproject" element={<SingleProject />} />
            <Route path="*" element={<Error404 />} />

        </Routes>
        </ScrollToTop>
      <Footer />
    </React.Fragment>

  )
}

export default App
