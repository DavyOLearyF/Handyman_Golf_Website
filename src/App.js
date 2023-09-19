import './App.css';
import ScrollButton from './components/ScrollButton';
import ProductForm from './components/ProductForm';



function App() {


  return (
    <div className="container">
    <ScrollButton/>
    <div className='sample-page'>
<h1 className='header-text'>Sample Page</h1>
<ProductForm/>
    </div>
    </div>
  );
}

export default App;
