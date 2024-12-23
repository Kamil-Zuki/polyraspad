import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><Link to="/">Polyraspad</Link></div>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;