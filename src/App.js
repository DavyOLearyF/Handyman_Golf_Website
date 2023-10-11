import './App.css';
import ScrollButton from './components/ScrollButton';
import ProductForm from './components/ProductWidgets/ProductForm';
import ProductPopup from './components/AddProductPopup/ProductPopup';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  return (
    <div className="container">
      <HamburgerMenu/>
      <ScrollButton />
      <div className='testimonials-page' id='testimonials'>
        <h1 className='header-text'>Testimonials</h1>
      </div>
      <div className='sample-2' id='contacts'>
        <h1 className='header-text'>Contact Us</h1>
      </div>
    </div>
  );
}

export default App;
