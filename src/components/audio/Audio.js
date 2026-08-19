import { useRef, useEffect } from 'react';
import { directory } from '../../pages/directory/directory';
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'
import './Audio.styles.scss';

// const Audio = ({ item, isPlaying, onToggle, onEnded }) => {
//   const audioRef = useRef(null);

//   const handleToggleClick = (e) => {
//     e.stopPropagation(); 

//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     } else {
//       const playPromise = audioRef.current.play();
      
//       if (playPromise !== undefined) {
//         playPromise.catch((error) => {
//           console.log("iOS Audio Engine caught restriction:", error);
//         });
//       }
//     }

//     onToggle();
//   };

//   useEffect (() => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.play().catch(e => console.log("Playback error: ", e));
//     } else {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   }, [isPlaying]);

//   return (
//     <span className="audio-card">
//       <audio 
//         ref={audioRef} 
//         src={item.audio} 
//         onEnded={onEnded}
//         preload="auto"
//       />
//       <button onClick={handleToggleClick}>
//         {isPlaying ? <Pause /> : <Play />}
//       </button>
//     </span>
//   );
// };

const Audio = ({ item, isPlaying, onToggle, onEnded }) => {
  const audioRef = useRef(null);

  // THE ULTIMATE MOBILE HOTFIX:
  // Fires the absolute microsecond a finger touches the play icon on iOS.
  const handleTouchStartPrime = (e) => {
    e.stopPropagation();
    
    // CRITICAL LINE: Tells iOS Safari/Chrome to skip the ghost mouse click event 
    // that usually follows a finger tap. This stops the double-triggering.
    e.preventDefault(); 

    if (!audioRef.current) return;

    if (!isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("iOS Touch-Prime Playback Restriction:", error);
        });
      }
      onToggle(); // Changes icon to Pause
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      onToggle(); // Changes icon to Play
    }
  };

  // DESKTOP / MOUSE FALLBACK:
  // This handles standard mouse clicks on computers, where onTouchStart never runs.
  const handleToggleClick = (e) => {
    e.stopPropagation(); 

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Desktop Click Restriction:", error);
        });
      }
    }
    onToggle();
  };

  // Keeps the audio engine aligned with any background or global state switches
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Playback sync error: ", e));
      }
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <span className="audio-card">
      <audio 
        ref={audioRef} 
        src={item.audio} 
        onEnded={onEnded}
        preload="auto"
      />
      <button 
        onClick={handleToggleClick}
        onTouchStart={handleTouchStartPrime} // Mobile finger tap lane
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </span>
  );
};

export default Audio;