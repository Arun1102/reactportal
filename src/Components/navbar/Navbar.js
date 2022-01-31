import React from 'react';
import './Navbar.css'

function Navbar() {
  return <div>
      <nav className='Navbar'>
          
          <ul className='Navbar-row'>
              
              <img className='Navbar-img' src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"></img>
            
                |
            
            <li className='Navbar-list'>Home</li>
            <li className='Navbar-list'> Login</li>
            <button className='Navbar-button'>Sign Up</button>
              
          </ul>
      </nav>
  </div>;
}

export default Navbar;
