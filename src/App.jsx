import React from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Slider from './components/slider/slider.jsx'
import Services from './components/servicesSection/Services.jsx'
import About from './components/about/about.jsx'
import About2 from './components/about/About2.jsx'
import Tools from './components/Tool/Tools.jsx'
import Latest from './components/Latest/Latest.jsx'
import Edu from './components/Education/edu.jsx'
import Contact from './components/contact/Contact.jsx'



const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Slider />
    <Services />
    <About />
    <About2 />
    <Tools />
    <Latest />
    <Contact />
    <Footer />
    </>
  )
}

export default App