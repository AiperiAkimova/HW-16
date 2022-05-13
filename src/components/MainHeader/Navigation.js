import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
// import AuthContext from '../../store/auth-context';
// import { useContext } from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const contextData = useContext(AuthContext)
//  return (
  // <AuthContext.Consumer>
    // {(contextData) => {
      return (
        <nav className={classes.nav}>
          <ul>
            {contextData.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {contextData.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {contextData.isLoggedIn && (
              <li>
                <button onClick={contextData.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      );
    // }}
  // </AuthContext.Consumer>
//  ) 
  
};

export default Navigation;
