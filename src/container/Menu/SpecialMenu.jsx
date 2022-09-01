import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Our Specialities!" />
      <h1 className="headtext__cormorant">The Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Snacks</p>
        <div className="app__specialMenu_menu_items">
          {data.snacks.map((snacks, index) => (
            <MenuItem
              key={snacks.title + index}
              title={snacks.title}
              price={snacks.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.coffee2} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Coffee</p>
        <div className="app__specialMenu_menu_items">
          {data.coffee.map((coffee, index) => (
            <MenuItem
              key={coffee.title + index}
              title={coffee.title}
              price={coffee.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button" id="button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
