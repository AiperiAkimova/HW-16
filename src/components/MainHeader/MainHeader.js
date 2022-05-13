import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

import Switch from '../Switch';

const MainHeader = (props) => {
  
  
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
     <Switch />
     
   
    </header>
  );
};

export default MainHeader;
