import React from 'react'
import Navbar from '../components/Navbar'
import Bgimg from '../components/Bgimg'
import img4 from '../assets/explorekoraput3.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Bgimg
        cName="bgImg-mid"
        bgimg={img4}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact