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
  
  // Track the actual playback intent to prevent double-firing state updates
  const lockRef = useRef(false);

  const handleToggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); 

    if (!audioRef.current) return;

    // Prevent immediate double-clicks from running within a 200ms window
    if (lockRef.current) return;
    lockRef.current = true;
    setTimeout(() => { lockRef.current = false; }, 200);

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("iOS Audio Engine caught restriction:", error);
        });
      }
    }

    onToggle();
  };

  // Purely handles state synchronization when toggled by parent resets or track completions
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Playback error: ", e));
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
      
      {/* 
        FIX: Use a generic div styled as a button with pointer-events handled cleanly.
        This drops native button 'ghost click conversions' on mobile touch screens entirely.
      */}
      <div 
        role="button"
        tabIndex={0}
        onClick={handleToggleClick}
        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        {isPlaying ? <Pause /> : <Play />}
      </div>
    </span>
  );
};

export default Audio;