import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to="/category/technology">Technology</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/education">Education</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/health">Health</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/food">Food</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/category/sports">Sports</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="sidebarItem">
        <span className="sidebarTitle">FILTER</span>
        <div className="sidebarfilter">
          <ul className="dropdown">
            <li>
              <Link to="/filter/2024">2024</Link>
            </li>
            <li>
              <Link to="/filter/2023">2023</Link>
            </li>
            <li>
              <Link to="/filter/2022">2022</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}