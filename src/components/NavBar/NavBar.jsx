// NavBar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '/summit-shop-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from '../SearchForm/SearchForm';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearchForm = () => {
    setIsSearchOpen(false);
  };

  const linkStyles = ({ isActive }) =>
    isActive ? `nav-link ${styles.link} ${styles.link_active}` : `nav-link ${styles.link}`;

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav}`}>
      <div className="container-fluid">
        <NavLink to="/">
          <img src={logo} alt="Summit Shop Logo" className={styles.logo} />
        </NavLink>
        <NavLink className={`${linkStyles} ${styles.title}`} to="/">
          Summit Shop
        </NavLink>
        <div className={styles.navLinks}>
          <NavLink className={linkStyles} to="/mens">
            Mens
          </NavLink>
          <NavLink className={linkStyles} to="/womens">
            Womens
          </NavLink>
        </div>
        <div className={styles.icons}>
        <NavLink to="/products">
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </NavLink>
          <NavLink to="/favorites">
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </NavLink>
          <FontAwesomeIcon icon={faSearch} className={`${styles.icon} fa-search`} onClick={handleSearchIconClick} />
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          </NavLink>
        </div>
      </div>
      {isSearchOpen && <SearchForm onClose={closeSearchForm} />}
    </nav>
  );
};

export default NavBar;
