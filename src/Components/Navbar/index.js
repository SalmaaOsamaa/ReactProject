import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Sahla</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Taskers' activeStyle>
            Locations
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/Tasks' activeStyle>
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