import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1 Street, City Name, Post Code, Country</p>
        <p className="p__opensans">+coffeeshop@email.co.uk</p>
        <p className="p__opensans">+4412345678</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.coffeeLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;“Quote about coffee”&quot;</p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
