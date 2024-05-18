// NavBar.jsx

import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/summit-shop-logo.png'; // Assuming you have the logo image in your project

const NavBar = () => {
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
        <div className={styles.icons}>
          <NavLink to="/">
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </NavLink>
          <NavLink to="/favorites">
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </NavLink>
          <NavLink to="/products">
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </NavLink>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


