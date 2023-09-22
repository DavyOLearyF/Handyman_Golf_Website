import React, { useRef } from 'react';
import { TodoWrapper } from './TodoWrapper';
import background1 from '../BG1.jpeg';
import background2 from '../BG2.jpeg';
import logo from '../Logo-Final-bg.png';
import ProductPopup from './ProductPopup'

const ScrollButton = () => {
  const targetRef = useRef(null);

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
<div className='main-page'>
			<div className="navbar">
				<img src={logo} className="logo"></img>
				<ul>
					<li>
						<a href="index.html">Home</a>
					</li>
					<li>
						<a href="buy.html">Buy</a>
					</li>
					<li>
						<a href="sell.html">Sell</a>
					</li>
					<li>
						<a href="#">Trade</a>
					</li>
				</ul>
			</div>
			<div className="content">
				<h1>Handyman Golf</h1>
				<p>For all your golf club needs.</p>
				<div>
                <button onClick={scrollToDiv} type='button' className='scroll-btn'><span></span>View Products</button>
				</div>
		</div>
    </div>
	<div className="product-page" ref={targetRef}>
			<div className="product-page-container">
		
				<ProductPopup/>
		
			
			</div>
      </div>
    </div>
  );
};

export default ScrollButton;