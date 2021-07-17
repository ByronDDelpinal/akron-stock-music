import Link from 'gatsby-link';
import React from 'react';

import logoImg from '../images/face.png';

const Header = props => {
  return (
    <section className="site-header">
      <Link to="/" className="brand-logo">
        <img src={logoImg} alt="small version of my face with a blueh at on" />
      </Link>
      <nav id="main-menu">
        <ul>
        <li>
            <Link
              className="home"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${props.selectedPage === 'about' ? 'selected' : ''}`}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${props.selectedPage === 'genres' ? 'selected' : ''}`}
              to="/genres/"
            >
              Genres
            </Link>
          </li>
          <li>
            <Link
              className={`${props.selectedPage === 'contact' ? 'selected' : ''}`}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
