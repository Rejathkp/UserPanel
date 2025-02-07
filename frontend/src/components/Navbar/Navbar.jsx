import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
            <img src="  \src\assets\logo.svg" alt="" />
        </div>
        <ul className="menu">
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/internship">Internship</a></li>
          <li><a href="/job-fair">Job Fair</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="user-profile">
          <div className="circle">A</div>
          <span className="username">Abhishek</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;