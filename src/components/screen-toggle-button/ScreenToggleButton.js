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
        <div className="screen-toggle">
          <CgMinimize className="screen-icon" />
          <div className="screen-text">
            <p>EXIT FULL</p>
            <p>SCREEN</p>
          </div>
        </div>
      ) : (
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