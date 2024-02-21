import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Heder = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem("registeredEmail");
};

useEffect(() => {
  const loggedInUser = localStorage.getItem("registeredEmail");
  if (loggedInUser) {
      setIsLoggedIn(true); 
  }
}, [isLoggedIn]);



  return (
    <nav className='nav-header'>
    <div class="nav-content">
      <div class="logo-header">
        <a   href="#" className='a-header'>Royalkey</a>
      </div>
      <ul class="nav-links">
        <li className='li-header'><Link to='/home' className='a-header'>Home </Link></li>
       <li className='li-header'><a href="#" className='a-header'><Link to='/booking' style={{ textDecoration: 'none', color: 'inherit' }}>Booking</Link></a></li>
       <li className='li-header'> 
       {isLoggedIn ? (
                <a href="#" className='a-header' onClick={handleLogout}>
                    log out
                </a>
            ) : (
                <Link to="/login" className='a-header'>
                    log in
                </Link>
            )}</li>      
      </ul>
    </div>
  </nav>
  )
}

export default Heder