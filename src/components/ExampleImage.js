import React from 'react';
import '../css/ExampleImage.scss';
import Illustration from '../images/illustration-dashboard.png';

function ExampleImage() {
  return (
  <div className="illustration">
    <img src={Illustration} alt="Illustration"/>
  </div>
  );
};

export default ExampleImage
