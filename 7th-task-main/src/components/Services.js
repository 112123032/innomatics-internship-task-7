import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Services;
