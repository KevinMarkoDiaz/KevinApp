import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container-content'>
        <div className='footer-container-social-media'>
          <BsInstagram className='footer-container-social-media-icons' />
          <p>_</p>
          <BsFacebook className='footer-container-social-media-icons' />
          <p>_</p>
          <BsTwitter className='footer-container-social-media-icons' />
        </div>
        <div className='footer-container-category-link'>
          <ul>
            <Link to="/categories/cap" className='footer-container-category-links'>Gorras</Link>
            <p>_</p>
            <Link to="/categories/t-shirt" className='footer-container-category-links'>Camisetas</Link>
            <p>_</p>
            <Link to="/categories/items" className='footer-container-category-links'>Articulos</Link>
          </ul>
        </div>
        <div className='d-flex copyright'>
          <FaCopyright />
          <p> 2022 Todos los derechos reservados </p>
        </div>
      </div>
    </div>
  )
}
