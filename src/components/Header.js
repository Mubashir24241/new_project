// src/components/Header.js
import React from 'react';
import '../styles/Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <ul>
          <li>Overview</li>
          <li>Curriculum</li>
          <li>Refund</li>
          <li>Testimonials</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </header>
  );
};

export default Header;
