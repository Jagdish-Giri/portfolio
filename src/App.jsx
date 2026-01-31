import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Slider from './components/slider/Slider.jsx'
import Services from './components/servicesSection/Services.jsx'
import About from './components/about/about.jsx'
import About2 from './components/about/About2.jsx'
import Tools from './components/Tool/Tools.jsx'
import Latest from './components/Latest/Latest.jsx'
import Edu from './components/Education/edu.jsx'
import Contact from './components/contact/Contact.jsx'
import Aboutpage from './components/pages/Aboutpage.jsx';
import Skills from './components/pages/Skills.jsx';



const App = () => {
  return (
    <>
    <Router>
      <Header />
    <div className='main-content'>
    <Routes>
      <Route path='/' element={
    <> 
    <Hero />
    <Slider />
    <Services />
    <About />
    <About2 />
    <Tools />
    <Latest />
    <Contact />
    </>
      } />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
    </div>
    <Footer />
    </Router>
    </>
    
  )
}

export default App