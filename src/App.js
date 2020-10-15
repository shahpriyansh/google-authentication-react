import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
    const [username,setUsername] = React.useState('');
    const [isLoggedin,setIsLoggedin] = React.useState(false);
    const onLogin = (name)=>{
        setIsLoggedin(true);
        setUsername(name);
    }
    const onLogout = ()=>{
        setIsLoggedin(false);
        setUsername('');
    }
  return (
    <div className="App">
      {isLoggedin?<h2>Welcome {username}</h2>:<h2>Please Logged in</h2>}
        {!isLoggedin?<Login onLoginclbk = {onLogin} />:<Logout onLogoutclbk = {onLogout} />}
      <br />
    </div>
  );
}

export default App;
