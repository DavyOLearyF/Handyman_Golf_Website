import './App.css';
import * as React from 'react';
import HomePage from './components/ScrollButton';
import LogIn from './components/login';
import ProductForm from './components/ProductWidgets/ProductForm';
import ProductPopup from './components/AddProductPopup/ProductPopup';
import { UserContext } from './context/user.context';



function App() {

  const {loggedIn, setLoggedIn} = React.useContext(UserContext)

  console.log(window.location)
  //case ("/" && (adminLoggedIn)) 
  let component
  switch (window.location.pathname) {
    case "/":
     // component = <LandingPage/>  //TODO
     component = <HomePage/>
     console.log("Logged In? " + loggedIn)
      break
    case "/login":
      component = <LogIn/>
      console.log("Logged In? " + loggedIn)
      break
    // case "/editHome":
    //   component = <HomePage/>
    //   break
  }

  return (
    <>
      {component}
    </>
  );
}

export default App;
