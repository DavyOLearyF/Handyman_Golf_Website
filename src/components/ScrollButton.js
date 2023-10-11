import React, { useRef } from 'react';
import { TodoWrapper } from './ProductWidgets/TodoWrapper';
import background1 from '../BG1.jpeg';
import background2 from '../BG2.jpeg';
import logo from '../Logo-Final-bg.png';
import ProductPopup from './AddProductPopup/ProductPopup';
import './ScrollButton.css';

const ScrollButton = () => {
  const targetRef = useRef(null);

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className='main-page' id='home'>
        <div className="navbar">
          <img src={logo} className="logo"></img>
        </div>
        <div className="content">
          <h1>Handyman Golf</h1>
          <p>For all your golf club needs.</p>
          <div>
            <button onClick={scrollToDiv} type='button' className='scroll-btn'><span></span>View Products</button>
          </div>
        </div>
      </div>
      <div className="product-page" ref={targetRef} id='products'>
      <h1 className='header-text'>Products</h1>
        <div className="product-page-container">
          <ProductPopup />
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;
