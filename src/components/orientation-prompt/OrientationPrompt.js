import { ReactComponent as W } from '../../assets/svg/w.svg';
import './OrientationPrompt.styles.scss';

const OrientationPrompt = ({ children }) => {
  return (
    <div className="orientation-wrapper">
      <div className="orientation-overlay">
        <div className="rotate-icon-container">
          <W className="rotate-svg" />
          <div className="orientation-text">
            <h2>PLEASE ROTATE YOUR DEVICE</h2>
          </div>
        </div>
      </div>
      <div className="site-content">
        {children}
      </div>
    </div>
  );
};

export default OrientationPrompt;