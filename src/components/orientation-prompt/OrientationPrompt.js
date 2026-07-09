import { useState, useEffect, useRef } from 'react';
import { ReactComponent as W } from '../../assets/svg/w.svg';
import './OrientationPrompt.styles.scss';

const OrientationPrompt = ({ children }) => {
  return (
    <div className="orientation-wrapper">
      <div className="orientation-overlay">
        <div className="rotate-icon-container">
          <W className="rotate-svg"/>
          <div className="orientation-text">
            <h2>TAP ANYWHERE AND ROTATE YOUR DEVICE</h2>
          </div>
        </div>
      </div>
      <div className="site-content">
        {children}
      </div>
    </div>
  );

  // const [isLandscape, setIsLandscape] = useState(false);
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   // 1. Helper function to check if device is currently horizontal
  //   const checkOrientation = () => {
  //     if (window.screen && window.screen.orientation) {
  //       const type = window.screen.orientation.type;
  //       return type.includes('landscape');
  //     }
  //     // Fallback for older browsers/iOS Safari
  //     return window.innerWidth > window.innerHeight;
  //   };

  //   // Initialize state
  //   setIsLandscape(checkOrientation());

  //   // 2. Function to handle fullscreen activation
  //   const goFullscreen = async () => {
  //     if (!wrapperRef.current) return;
      
  //     try {
  //       // Check for cross-browser standard fullscreen methods
  //       const element = wrapperRef.current;
  //       if (element.requestFullscreen) {
  //         await element.requestFullscreen();
  //       } else if (element.webkitRequestFullscreen) { /* Safari code */
  //         await element.webkitRequestFullscreen();
  //       } else if (element.msRequestFullscreen) { /* IE11 code */
  //         await element.msRequestFullscreen();
  //       }
  //     } catch (error) {
  //       console.warn("Fullscreen request blocked or unhandled:", error);
  //     }
  //   };

  //   // 3. Listener to track orientation updates dynamically
  //   const handleOrientationChange = () => {
  //     const landscapeActive = checkOrientation();
  //     setIsLandscape(landscapeActive);

  //     // Trigger automatic fullscreen if user changes to landscape
  //     if (landscapeActive) {
  //       goFullscreen();
  //     }
  //   };

  //   // 4. Fallback user interaction click listener
  //   // Modern browsers require a user gesture to enter fullscreen mode safely.
  //   const handleUserGesture = () => {
  //     if (checkOrientation()) {
  //       goFullscreen();
  //     }
  //   };

  //   // Bind event listeners to window and orientation API
  //   if (window.screen && window.screen.orientation) {
  //     window.screen.orientation.addEventListener('change', handleOrientationChange);
  //   } else {
  //     window.addEventListener('resize', handleOrientationChange);
  //   }

  //   window.addEventListener('click', handleUserGesture);
  //   window.addEventListener('touchstart', handleUserGesture);

  //   // Clean up all bound system listeners on unmount
  //   return () => {
  //     if (window.screen && window.screen.orientation) {
  //       window.screen.orientation.removeEventListener('change', handleOrientationChange);
  //     } else {
  //       window.removeEventListener('resize', handleOrientationChange);
  //     }
  //     window.removeEventListener('click', handleUserGesture);
  //     window.removeEventListener('touchstart', handleUserGesture);
  //   };
  // }, [])

  // return (
  //   <div className="orientation-wrapper" ref={wrapperRef}>
  //     <div className="orientation-overlay">
  //       <div className="rotate-icon-container">
  //         <W className="rotate-svg"/>
  //         <h2>TAP ANYWHERE AND ROTATE YOUR DEVICE</h2>
  //       </div>
  //     </div>
  //     <div className="site-content">
  //       {children}
  //     </div>
  //   </div>
  // );
};

export default OrientationPrompt;