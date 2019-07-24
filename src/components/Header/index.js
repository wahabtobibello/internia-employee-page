import React from 'react';
import { MdMailOutline, MdNotifications } from 'react-icons/md';
import './Header.scss';
import Button from '../Button';
import logo from '../../assets/images/internia_logo.png';

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav-bar">
        <ul className="list">
          <li className="item"><span>Calendar</span></li>
          <li className="item"><span>Statistic</span></li>
          <li className="item -active"><span>Employee</span></li>
          <li className="item"><span>Client</span></li>
          <li className="item"><span>Equipment</span></li>
        </ul>
      </nav>
      <Button icon><MdNotifications /></Button>
      <Button icon><MdMailOutline /></Button>
      <Button image><img src="https://placeimg.com/50/50/people" alt="User" /></Button>
    </header>
  );
}

export default Header;
