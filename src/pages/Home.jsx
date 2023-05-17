import React from "react";
import Navbar from "../components/Navbar.jsx";
import Bgimg from "../components/Bgimg.jsx";
import img1 from "../assets/Bgimg1.jpg";
import Destination from "../components/Destination.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx";


const Home = () => {
  return (
    <>
      <Navbar />
      <Bgimg
        cName="bgImg"
        bgimg={img1}
        title="Come Explore With Us.."
        text="Choose Your Faviotite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
};

export default Home;
