import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import Dropdown from '../../components/dropdown/Dropdown';
import ScreenToggleButton from '../../components/screen-toggle-button/ScreenToggleButton';
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';
import { FaInstagram } from 'react-icons/fa6';
import { ReactComponent as W } from '../../assets/svg/w.svg';
import './Navigation.styles.scss';

const Navigation = () => {
  return (
    
    <Fragment>
      <div className="navigation-container">
        <nav className="navigation">
          <Link className="logo-container" to="/">
            <img src={WittnerLogo} alt="Museum Logo" />
          </Link>
          {/* <Link className="egg-icon-container" to="/">
            <W className="egg-icon" />
          </Link> */}
          <div className="nav-center">
            <NavBar />
          </div>
          <div className="svgs-container">
            <div className="instagram-icon-box">
              <Link className="instagram" to="https://www.instagram.com/wittnermuseum/?hl=en" target="_blank">
                <FaInstagram />
              </Link>
            </div>
            
            {/* <Link className="w" to="/">
              <W />
            </Link> */}
            <div className="toggle-icon-box">
              <div className="screen-toggle-nav">
                <ScreenToggleButton />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      <div className="dropdown">
        <Dropdown />
      </div>
      <div className="screen-toggle-button">
        <ScreenToggleButton />
      </div>
    </Fragment>
  );
};

export default Navigation;