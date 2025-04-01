import React, { useEffect, useState } from "react";
import Logo from "../assets/Bitmaplogo.png";
import { fetcFrontendData } from "../services/api";

const Footer = () => {
  const [contactDetails, setContactDetails] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      let res = await fetcFrontendData();
      if (res && res.success) {
        setContactDetails(res.data);
      }
    };
    fetchdata();
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-tagline fw-bold">
                Tagline will go here. Lorem ipsum dolor sit amet...
              </p>
              <a href="mailto:user@email.com" className="footer-email">
                user@email.com
              </a>
            </div>

            <div className="footer-right">
              <div className="footer-address">
                <h4>Address</h4>
                <p>{contactDetails.address}</p>
              </div>

              <div className="footer-contacts">
                <h4>Contacts</h4>
                <p>{contactDetails.contact_mail}</p>
                <p>{contactDetails.inquiry_mail}</p>
                <p>{contactDetails.contact_no}</p>
              </div>
            </div>
          </div>

          <div className="footer-nav">
            <img src={Logo} height={60} width={135} />
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
            <div className="footer-bottom">
              <p>&copy; 2022. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
