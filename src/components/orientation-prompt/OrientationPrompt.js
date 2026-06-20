import { ReactComponent as W } from '../../assets/svg/w.svg';
import './OrientationPrompt.styles.scss';

const OrientationPrompt = ({ children }) => {
  return (
    <div className="orientation-wrapper">
      <div className="orientation-overlay">
        <div className="rotate-icon-container">
          {/* <svg 
            className="rotate-svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg> */}
          <W className="rotate-svg"/>
          <h2>PLEASE ROTATE YOUR DEVICE</h2>
        </div>
      </div>
      <div className="site-content">
        {children}
      </div>
    </div>
  );
};

export default OrientationPrompt;