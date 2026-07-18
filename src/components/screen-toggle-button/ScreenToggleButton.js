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

  // const toggleFullscreen = async () => {
  //   try {
  //     const isCurrentlyFull = document.fullscreenElement || document.webkitFullscreenElement;

  //     if (isCurrentlyFull) {
  //       // Exit Fullscreen
  //       if (document.exitFullscreen) {
  //         await document.exitFullscreen();
  //       } else if (document.webkitExitFullscreen) {
  //         await document.webkitExitFullscreen(); // Safari
  //       }
  //     } else {
  //       // Enter Fullscreen (Targeting the root page element)
  //       const rootElement = document.documentElement;
  //       if (rootElement.requestFullscreen) {
  //         await rootElement.requestFullscreen();
  //       } else if (rootElement.webkitRequestFullscreen) {
  //         await rootElement.webkitRequestFullscreen(); // Safari
  //       }
  //     }
  //   } catch (error) {
  //     console.warn("Fullscreen toggle failed or blocked by browser security:", error);
  //   }
  // };

  // const toggleFullscreen = async () => {
  //   try {
  //     const rootElement = document.documentElement;

  //     // 1. Check if the browser supports any form of native Fullscreen API
  //     const supportsNativeFullscreen = !!(rootElement.requestFullscreen || rootElement.webkitRequestFullscreen);

  //     if (supportsNativeFullscreen) {
  //       // --- NATIVE FULLSCREEN LOGIC (Android, Desktop, iPad) ---
  //       const isCurrentlyFull = document.fullscreenElement || document.webkitFullscreenElement;
        
  //       if (isCurrentlyFull) {
  //         if (document.exitFullscreen) {
  //           await document.exitFullscreen();
  //         } else if (document.webkitExitFullscreen) {
  //           await document.webkitExitFullscreen();
  //         }
  //       } else {
  //         if (rootElement.requestFullscreen) {
  //           await rootElement.requestFullscreen();
  //         } else if (rootElement.webkitRequestFullscreen) {
  //           await rootElement.webkitRequestFullscreen();
  //         }
  //       }
  //     } else {
  //       // --- FAUX FULLSCREEN FALLBACK (iPhone / iOS WebKit) ---
  //       // Toggle a class on the root element to trigger the CSS override
  //       rootElement.classList.toggle('ios-faux-fullscreen');
  //     }
  //   } catch (error) {
  //     console.warn("Fullscreen toggle failed or blocked by browser security:", error);
  //   }
  // };

  // const toggleFullscreen = async () => {
  //   try {
  //     const rootElement = document.documentElement;
  //     const wrapper = document.getElementById('app-viewport-wrapper');
      
  //     if (!wrapper) {
  //       console.warn("Required wrapper element '#app-viewport-wrapper' not found.");
  //       return;
  //     }

  //     // Check for native browser engine support (True for Desktop, Android, iPad)
  //     const supportsNativeFullscreen = !!(rootElement.requestFullscreen || rootElement.webkitRequestFullscreen);

  //     if (supportsNativeFullscreen) {
  //       const isCurrentlyFull = document.fullscreenElement || document.webkitFullscreenElement;
        
  //       if (isCurrentlyFull) {
  //         if (document.exitFullscreen) { await document.exitFullscreen(); }
  //         else if (document.webkitExitFullscreen) { await document.webkitExitFullscreen(); }
  //       } else {
  //         if (rootElement.requestFullscreen) { await rootElement.requestFullscreen(); }
  //         else if (rootElement.webkitRequestFullscreen) { await rootElement.webkitRequestFullscreen(); }
  //       }
  //     } else {
  //       // --- IPHONE SPECIFIC FALLBACK ENGINE ---
  //       const isFauxFull = rootElement.getAttribute('data-fullscreen') === 'true';
        
  //       if (isFauxFull) {
  //         rootElement.removeAttribute('data-fullscreen');
  //         window.scrollTo(0, 0);
  //       } else {
  //         rootElement.setAttribute('data-fullscreen', 'true');
          
  //         // Micro-Scroll execution window: Forces WebKit to scroll 1px down inside 
  //         // the newly generated 101dvh wrapper container, sliding the browser headers away
  //         setTimeout(() => {
  //           const wrapper = document.getElementById('app-viewport-wrapper');
  //           if (wrapper) {
  //             wrapper.scrollTop = 1; // Shifts layout scroll context by 1 pixel
  //           }
  //         }, 80);
  //       }
  //     }
  //   } catch (error) {
  //     console.warn("Fullscreen toggle failed or blocked by browser security:", error);
  //   }
  // };

  const toggleFullscreen = async () => {
    alert("Button was physically tapped on iOS!");
    try {
      const rootElement = document.documentElement;
      const wrapper = document.getElementById('app-viewport-wrapper');
      
      if (!wrapper) return;

      // Standard native check (Desktop, Android, iPad)
      const supportsNativeFullscreen = !!(rootElement.requestFullscreen || rootElement.webkitRequestFullscreen);

      if (supportsNativeFullscreen) {
        const isCurrentlyFull = document.fullscreenElement || document.webkitFullscreenElement;
        if (isCurrentlyFull) {
          if (document.exitFullscreen) { await document.exitFullscreen(); }
          else if (document.webkitExitFullscreen) { await document.webkitExitFullscreen(); }
        } else {
          if (rootElement.requestFullscreen) { await rootElement.requestFullscreen(); }
          else if (rootElement.webkitRequestFullscreen) { await rootElement.webkitRequestFullscreen(); }
        }
      } else {
        // iPhone Viewport Toggle
        const isFauxFull = rootElement.getAttribute('data-fullscreen') === 'true';
        if (isFauxFull) {
          rootElement.removeAttribute('data-fullscreen');
        } else {
          rootElement.setAttribute('data-fullscreen', 'true');
        }
      }
    } catch (error) {
      console.warn("Fullscreen toggle failed:", error);
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
            <p>FULL!!!</p>
            <p>SCREEN</p>
          </div>
        </div>
      )}
    </button>
  );
}

export default ScreenToggleButton;