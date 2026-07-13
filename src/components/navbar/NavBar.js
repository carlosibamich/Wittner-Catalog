import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.styles.scss';



const NavBar = ({ isActive }) => {
  
  return (
    <nav className="main-nav-options">
      <div className="navlink-container">
        <NavLink to="/entry" end className={`nav-link ${isActive ? 'active' : ''}`} >
          ENTRY
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/" end className={`nav-link ${isActive ? 'active' : ''}`} >
          MAIN ROOM
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/alcove" end className={`nav-link ${isActive ? 'active' : ''}`} >
          ALCOVE
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/stairwell" end className={`nav-link ${isActive ? 'active' : ''}`} >
          STAIRWELL
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/green-room" end className={`nav-link ${isActive ? 'active' : ''}`} >
          GREEN ROOM
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/catalog-list" end className={`nav-link ${isActive ? 'active' : ''}`} >
          CATALOG
        </NavLink>
      </div>
   </nav>
  )
};

export default NavBar;