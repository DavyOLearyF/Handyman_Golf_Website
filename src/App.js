import './App.css';
import ScrollButton from './components/ScrollButton';
import ProductForm from './components/ProductForm';
import ProductPopup from './components/ProductPopup';



function App() {


  return (
    <div className="container">
    <ScrollButton/>
    <div className='sample-page'>
<h1 className='header-text'>Sample Page</h1>
<ProductForm/>
    </div>
    <div className='sample-2'>
    <h1 className='header-text'>Sample Page 2</h1>
    <ProductPopup/>
    </div>
    </div>
  );
}

export default App;
