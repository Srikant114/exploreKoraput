import React from 'react'
import Navbar from '../components/Navbar'
import Bgimg from '../components/Bgimg'
import img2 from "../assets/exploreKoraput1.jpg"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <>
      <Navbar />
      <Bgimg
        cName="bgImg-mid"
        bgimg={img2}
        title="About"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About