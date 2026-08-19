import { useRef, useEffect } from 'react';
import { directory } from '../../pages/directory/directory';
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'
import './Audio.styles.scss';

// const Audio = ({ item, isPlaying, onToggle, onEnded }) => {
//   const audioRef = useRef(null);

//   const handleTouchStartPrime = (e) => {
//     e.stopPropagation();
//     if (audioRef.current && audioRef.current.paused) {
//       try {
//         audioRef.current.load();
//       } catch (err) {
//         console.log("Audio touch-prime bypassed:", err);
//       }
//     }
//   };

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
//       <button 
//         onClick={handleToggleClick}
//         onTouchStart={handleTouchStartPrime} gates
//       >
//         {isPlaying ? <Pause /> : <Play />}
//       </button>
//     </span>
//   );
// };

const Audio = ({ item, isPlaying, onToggle, onEnded }) => {
  const audioRef = useRef(null);

  const handleToggleClick = (e) => {
    e.stopPropagation(); 
    if (!audioRef.current) return;

    if (isPlaying) {
      // If already playing, stop it synchronously
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      // iOS CRITICAL FIX: Play immediately inside the synchronous user click event thread.
      // Do not wait for React state or useEffect hooks to trigger this.
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("iOS Audio Engine caught restriction on direct play:", error);
        });
      }
    }

    // Inform parent layout to update global playing state
    onToggle();
  };

  // This effect now ONLY handles pausing when a DIFFERENT track begins playing
  useEffect(() => {
    if (!audioRef.current) return;

    // If this specific card is NOT the one marked as playing globally, ensure it is paused.
    if (!isPlaying) {
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
        type="button"
        onClick={handleToggleClick}
        className="audio-toggle-btn"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </span>
  );
};

export default Audio;