import { UserContext } from '../context/user.context';
import * as React from 'react';

let adminUsername, adminPassword

// function verifyLogin  () {

//     const { setLoggedIn } = useContext(UserContext)

//     if(adminUsername.equals('Davy') && adminPassword.equals('123')) {
//         setLoggedIn(true);
//         window.location.pathname = "/"
//     }
//     else{
//         console.log('Wrong login')
//     }
  
// }
export default function Login() {
    const { loggedIn, setLoggedIn } = React.useContext(UserContext);
    const [adminUsername, setAdminUsername] = React.useState('');
    const [adminPassword, setAdminPassword] = React.useState('');
  
    const verifyLogin = () => {
      if (adminUsername == 'Davy' && adminPassword == '123') {
        setLoggedIn(!loggedIn);
        console.log(loggedIn)
        window.location.pathname = '/';
      } else {
        console.log('Wrong login');
      }
    }


    return (
    <div className="loginPage">
        <h1 className="header2">Admin Login Page</h1>
        <div className="centerInput">
        <input
        className= 'loginInput'
        type='text'
        placeholder="Username"
        value={adminUsername}
        onChange={(e) => setAdminUsername(e.target.value)}
        />
        </div>
   <div className="centerInput">
   <input
        className= 'loginInput'
        type='text'
        placeholder="Password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
        />
   </div>
       <div className="centerInput">
        <button className="loginSubmit"
        onClick={verifyLogin}
        >
            Submit
        </button>
       </div>
    </div>

    )

}