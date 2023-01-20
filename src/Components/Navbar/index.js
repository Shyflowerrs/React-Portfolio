import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars} from './Navbar'
import { useNavigate } from "react-router"

import React from "react";

const Navbar = () => {
  const logo = require('../../assets/logo.png')
  const resume = require('../../assets/Chelsea_Resume.pdf')
  return (
    <>
      <Nav>
      <NavLink to="/">
        <img src={logo} width="50" height="50"/>
      </NavLink>
      <Bars/>
        <NavMenu>
          <NavLink to="/about" activeStyle>
          <b>01.</b>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
          <b>02.</b>
            Services
          </NavLink>
          <NavLink to="/Projects" activeStyle>
          <b>03.</b>
            Projects
          </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to={resume} target = "_blank" activeStyle>
          Resume
        </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
  export default Navbar