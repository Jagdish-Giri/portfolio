import React from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Slider from './components/slider/slider.jsx'
import Services from './components/servicesSection/Services.jsx'



const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Slider />
    <Services />
    <Footer />
    </>
  )
}

export default App