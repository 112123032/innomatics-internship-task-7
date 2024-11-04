import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img 
          alt="Innomatics Logo" 
          height="40" 
          src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png" 
          width="100%" 
        />
        
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active">Internships</NavLink>
        </li>
      </ul>
      
    </div>
  );
}

export default Navbar;