import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.styles.scss';



function NavBar({ isActive }) {
  
  return (
    <nav className="main-nav-options">
      <div className="navlink-container">
        <NavLink to="/entry" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>ENTRY</a>
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>MAIN ROOM</a>
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/alcove" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>ALCOVE</a>
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/stairwell" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>STAIRWELL</a>
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/green-room" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>GREEN ROOM</a>
        </NavLink>
      </div>
      <div className="navlink-container">
        <NavLink to="/catalog-list" end className={`nav-link ${isActive ? 'active' : ''}`} >
          <a>CATALOG</a>
        </NavLink>
      </div>
   </nav>
  )
};

export default NavBar;