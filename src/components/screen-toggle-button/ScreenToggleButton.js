import{ useState, useEffect } from 'react';
import { AiOutlineExpand } from "react-icons/ai";
import { CgMinimize } from "react-icons/cg";
import'./ScreenToggleButton.styles.scss';

const ScreenToggleButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Syncs the state if the user exits via ESC key or mobile swipe gestures
    const handleFullscreenChange = () => {
      const activeElement = document.fullscreenElement || document.webkitFullscreenElement;
      setIsFullscreen(!!activeElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      const isCurrentlyFull = document.fullscreenElement || document.webkitFullscreenElement;

      if (isCurrentlyFull) {
        // Exit Fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen(); // Safari
        }
      } else {
        // Enter Fullscreen (Targeting the root page element)
        const rootElement = document.documentElement;
        if (rootElement.requestFullscreen) {
          await rootElement.requestFullscreen();
        } else if (rootElement.webkitRequestFullscreen) {
          await rootElement.webkitRequestFullscreen(); // Safari
        }
      }
    } catch (error) {
      console.warn("Fullscreen toggle failed or blocked by browser security:", error);
    }
  };

  return (
    <button 
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      className="toggle-box"
    >
      {isFullscreen ? (
        /* Minimize Icon (Visible when Fullscreen) */
        // <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //   <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h6m0 0v6m0-6L3 21m17-7h-6m0 0v6m0-6l7 7M14 4h6m0 0v6m0-6l-7 7M4 10h6m0 0V4m0 6L3 3" />
        // </svg>
        <div className="screen-toggle">
          <CgMinimize className="screen-icon" />
          <div className="screen-text">
            <p>EXIT FULL</p>
            <p>SCREEN</p>
          </div>
        </div>
      ) : (
        /* Fullscreen Icon (Visible when Minimized) */
        // <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //   <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        // </svg>
        <div className="screen-toggle">
          <AiOutlineExpand className="screen-icon" />
          <div className="screen-text">
            <p>FULL</p>
            <p>SCREEN</p>
          </div>
        </div>
      )}
    </button>
  );
}

export default ScreenToggleButton;