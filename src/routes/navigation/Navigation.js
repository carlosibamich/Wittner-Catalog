import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaInstagram, FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import NavBar from '../../components/navbar/NavBar';
import './Navigation.styles.scss';
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        {/* <div className="chevron-left">
          <FaAngleLeft />
        </div> */}
        <nav className="navigation">
          <Link className="logo-container" to="/">
            <img src={WittnerLogo} alt="Museum Logo" />
          </Link>
          <div className="nav-center">
              <NavBar />
            {/* <ul className="wall-options">
              <li>north</li>
              <li>north / exit</li>
              <li>stage / east</li>
              <li>south</li>  
              <li>west</li>
            </ul> */}
          </div>
          <div className="socials-container">
            <Link className="instagram" to="https://www.instagram.com/wittnermuseum/?hl=en" target="_blank">
               <FaInstagram />
            </Link>
          </div>
        </nav>
        {/* <div className="chevron-right">
          <FaAngleRight />
        </div> */}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;