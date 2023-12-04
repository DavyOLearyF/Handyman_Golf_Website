import React, { useRef } from 'react';
import { TodoWrapper } from './ProductWidgets/TodoWrapper';
import background1 from '../BG1.jpeg';
import background2 from '../BG2.jpeg';
import logo from '../Logo-Final-bg.png';
import ProductPopup from './AddProductPopup/ProductPopup';
import './ScrollButton.css';
import { UserContext } from '../context/user.context';


import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';

const HomePage = () => {
  const targetRef = useRef(null);
  const { loggedIn, setLoggedIn } = React.useContext(UserContext);

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <div>
      <HamburgerMenu/>
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
      <div className='testimonials-page' id='testimonials'>
        <h1 className='header-text'>Testimonials</h1>
      </div>
      <div className='sample-2' id='contacts'>
        <h1 className='header-text'>Contact Us</h1>
      </div>
      <div className='footer'>
        <a href='/login' className='login-styling'>Log In</a>
      </div>
      <div className='footer-text'>{String(loggedIn)}</div>
    </div>
  );
};

export default HomePage;
