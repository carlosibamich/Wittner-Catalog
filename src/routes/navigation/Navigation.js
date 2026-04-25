import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import NavBar from '../../components/navbar/NavBar';
import './Navigation.styles.scss';
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <nav className="navigation">
          <Link className="logo-container" to="/">
            <img src={WittnerLogo} alt="Museum Logo" />
          </Link>
          <div className="nav-center">
              <NavBar />
          </div>
          <div className="socials-container">
            <Link className="instagram" to="https://www.instagram.com/wittnermuseum/?hl=en" target="_blank">
               <FaInstagram />
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;