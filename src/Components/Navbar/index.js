import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';
 import logo from '../Navbar/logo.jpg'


const Navbar = () => {
  return (
    <>
      <Nav initial={{opacity:0,
      }}
      animate={{opacity:1,
      }}
    
  
      >
        <NavLink to='/'>
          <h1>Sahla</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/locations' activeStyle>
            Locations
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/loginorsignup' activeStyle>
            Signup/Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Become a Tasker</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;