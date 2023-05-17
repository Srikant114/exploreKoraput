import React from 'react';
import Navbar from '../components/Navbar';
import Bgimg from '../components/Bgimg';
import img3 from '../assets/explorekoraput2.jpg'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Tours = () => {
  return (
    <>
      <Navbar />
      <Bgimg
        cName="bgImg-mid"
        bgimg={img3}
        title="Tours"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Tours