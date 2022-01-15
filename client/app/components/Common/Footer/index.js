/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Detalles De La Cuenta</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Ordenes</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Servicio Al Cliente</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>       
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Boletin Informativo</h2>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} LYNXSPORTS</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='https://www.facebook.com/compra.envios.7/' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/lynxsports4/' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>  
          <li>
            <a href='https://www.instagram.com/lynxsports4/' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>        
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
