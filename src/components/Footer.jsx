import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Explore Koraput</h1>
          <p>Choose Your Faviorite Destination</p>
        </div>
        <div>
          <Link href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-github-square"></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4><u>Explore Koraput</u></h4>
          <Link href="/">About Us</Link>
          <Link href="/">Photos</Link>
          <Link href="/">Events</Link>
          <Link href="/">Activities</Link>
          <Link href="/">Community</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <h4><u>Tour Packages</u></h4>
          <Link href="/">Chitrakoot & Tirathgarh</Link>
          <Link href="/">Tribal Tours</Link>
          <Link href="/">Camping Packages</Link>
          <Link href="/">Araku Valley</Link>
          <Link href="/">Koraput Valley</Link>
        </div>
        <div>
          <h4><u>Events</u></h4>
          <Link href="/">Parab Koraput</Link>
          <Link href="/">Ratha Yatra</Link>
          <Link href="/">Chaitra Parab</Link>
        </div>
        <div>
          <h4><u>Top Destination</u></h4>
          <Link href="/">Gupteshwar</Link>
          <Link href="/">Deomali</Link>
          <Link href="/">Duduma Waterfall</Link>
          <Link href="/">Punjisil Waterfall</Link>
          <Link href="/">Sabara Srikhetra</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
