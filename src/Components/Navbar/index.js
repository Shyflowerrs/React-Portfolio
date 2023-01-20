import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars} from './Navbar'
import { useNavigate } from "react-router"
import React from "react";
const Navbar = () => {

  return (
    <>
      <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars/>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/Projects" activeStyle>
            Projects
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
  export default Navbar