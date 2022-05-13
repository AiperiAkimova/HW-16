import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useEffect } from 'react';
import AuthContext from './store/auth-context'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const stotredUserLoggedInfo = localStorage.getItem('isLoggedIn') 

  if(stotredUserLoggedInfo === '1'){ 
  setIsLoggedIn(true)
}
}, [])

const loginHandler = async (email, password) => {
    localStorage.setItem('isLoggedIn' , '1') 
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn') 
    setIsLoggedIn(false);
  };
  
const [switchState, setSwitchState] = useState(false)
 
  return (
    <React.Fragment>
     <AuthContext.Provider
       value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onSwitch: setSwitchState
        }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main style={{backgroundColor: !switchState ? 'white' : 'black', 
       height:'873px'}}>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
            
        {isLoggedIn && <Home onLogout={logoutHandler} />} 
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
