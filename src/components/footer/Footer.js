import { PiRocketLaunch } from "react-icons/pi";
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="address">
          <p>204 N Morley Ave, Nogales, AZ 85621</p>
          <PiRocketLaunch className="rocket" />
        </div>
        <div className="logo">
          <img src={WittnerLogo} alt="Museum Logo" />
        </div>
        <div className="copyrights">
          <span>&copy;</span><p>2026 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;