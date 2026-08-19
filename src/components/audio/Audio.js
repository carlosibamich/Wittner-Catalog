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

  // CRITICAL IOS CHROME & SAFARI HOTFIX:
  // The moment the user's finger touches the play button, we instantly run .load()
  // on this specific track. This forces the iOS media gateway to open before the click fires.
  const handleTouchStartPrime = (e) => {
    e.stopPropagation();
    if (audioRef.current && audioRef.current.paused) {
      try {
        audioRef.current.load(); // Primes the audio buffer on the hardware level
      } catch (err) {
        console.log("Audio touch-prime bypassed:", err);
      }
    }
  };

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
          console.log("iOS Audio Engine caught restriction:", error);
        });
      }
    }

    onToggle();
  };

  useEffect (() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Playback error: ", e));
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
        onTouchStart={handleTouchStartPrime} // Intercepts finger touch to open iOS browser gates
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </span>
  );
};

export default Audio;