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

  // A UNIFIED ACTION HANDLER:
  // Handles both mobile touches and desktop clicks instantly without double-triggering.
  const handleMediaTrigger = (e) => {
    e.stopPropagation();

    // UNLOCK GHOST CLICKS:
    // If the event is a touch event, we explicitly block the fake 300ms 'click' 
    // event that mobile browsers try to fire afterwards.
    if (e.type === 'touchstart') {
      e.preventDefault();
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("iOS Audio Engine core exception:", error);
        });
      }
    }

    onToggle();
  };

  // Keeps the layout in perfect sync with any unexpected state unmounts
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Playback engine sync error: ", e));
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
        Bind the unified handler to both events. 
        On phone screens, 'onTouchStart' fires first, runs the code, and cancels the click.
        On computer screens, 'onClick' handles everything normally.
      */}
      <button 
        onClick={handleMediaTrigger}
        onTouchStart={handleMediaTrigger}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </span>
  );
};

export default Audio;