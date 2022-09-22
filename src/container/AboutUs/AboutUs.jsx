import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet arcu malesuada, dignissim mi at, convallis erat. Praesent sed
          ligula vel tellus sodales malesuada vel eu tellus. Quisque tempor
          venenatis dapibus. Etiam ultricies arcu lacus, sit amet imperdiet est
          sollicitudin id. Mauris vel elit ex. Etiam felis felis, bibendum id
          dapibus vel, sagittis et mi. In auctor varius lobortis. Aenean
          vestibulum nulla nec imperdiet pretium. Etiam tincidunt erat ligula,
          nec hendrerit sapien iaculis sed. Maecenas nec scelerisque nibh. Proin
          sagittis odio vitae felis volutpat hendrerit. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Morbi at.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <div className="app__aboutus-space" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={images.spoonflipped}
          alt="about_spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet arcu malesuada, dignissim mi at, convallis erat. Praesent sed
          ligula vel tellus sodales malesuada vel eu tellus. Quisque tempor
          venenatis dapibus. Etiam ultricies arcu lacus, sit amet imperdiet est
          sollicitudin id. Mauris vel elit ex. Etiam felis felis, bibendum id
          dapibus vel, sagittis et mi. In auctor varius lobortis. Aenean
          vestibulum nulla nec imperdiet pretium. Etiam tincidunt erat ligula,
          nec hendrerit sapien iaculis sed. Maecenas nec scelerisque nibh. Proin
          sagittis odio vitae felis volutpat hendrerit. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Morbi at.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
