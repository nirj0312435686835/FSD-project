import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Heder = () => {
  return (
    <nav className='nav-header'>
    <div class="nav-content">
      <div class="logo-header">
        <a   href="#" className='a-header'>Royalkey</a>
      </div>
      <ul class="nav-links">
        <li className='li-header'><Link to='/home' className='a-header'>Home </Link></li>
        <li className='li-header'><a href="#" className='a-header'>About</a></li>
        <li className='li-header'><a href="#" className='a-header'>Skills</a></li>
       <li className='li-header'><a href="#" className='a-header'><Link to='/booking' style={{ textDecoration: 'none', color: 'inherit' }}>Booking</Link></a></li>
       <li className='li-header'><a href="#" className='a-header'>log out</a></li>      
      </ul>
    </div>
  </nav>
  )
}

export default Heder