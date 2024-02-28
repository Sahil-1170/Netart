import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-item'>
          <i className="fa-solid fa-phone"></i>
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className='footer-item'>
          <i className="fa-brands fa-facebook"></i>
          <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer">www.facbook.com/cripumps</a>
        </div>
        <div className='footer-item'>
          <i className="fa-solid fa-globe"></i>
          <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer">www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;