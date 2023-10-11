// HamburgerMenu.js

import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close the menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="circle">
        <div className={`bar bar1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar bar2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar bar3 ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <div className="menu-items">
          <div onClick={() => scrollToSection('home')}>Home</div>
          <div onClick={() => scrollToSection('products')}>Products</div>
          <div onClick={() => scrollToSection('testimonials')}>Testimonials</div>
          <div onClick={() => scrollToSection('contacts')}>Contact Us</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
