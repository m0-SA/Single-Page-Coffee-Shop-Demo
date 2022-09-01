import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">Ambrosial</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', color: '#c65d7b' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.coffee} alt="header_img" />
    </div>
  </div>
);

export default Header;
