import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import { ReactComponent as W } from '../../assets/svg/w.svg';
import NavBar from '../../components/navbar/NavBar';
import Dropdown from '../../components/dropdown/Dropdown';
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';
import './Navigation.styles.scss';

const Navigation = () => {
  return (
    
    <Fragment>
      <div className="navigation-container">
        <nav className="navigation">
          <Link className="logo-container" to="/">
            <img src={WittnerLogo} alt="Museum Logo" />
          </Link>
          <Link className="egg-icon-container" to="/">
            <W className="egg-icon" />
          </Link>
          <div className="nav-center">
            <NavBar />
          </div>
          <div className="svgs-container">
            <Link className="instagram" to="https://www.instagram.com/wittnermuseum/?hl=en" target="_blank">
               <FaInstagram />
            </Link>
            <Link className="w" to="/">
              <W />
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
      <div className="dropdown">
        <Dropdown />
      </div>
    </Fragment>
  );
};

export default Navigation;