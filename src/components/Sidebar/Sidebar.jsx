import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h2 className='title'>⛩️ Characters</h2>
        <li><Link to="/kakashi"> Kakashi Hatake</Link></li>
    </aside>
  );
};

export default Sidebar;