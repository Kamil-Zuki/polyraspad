import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h2>Social</h2>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;