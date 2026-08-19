import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { directory } from '../../pages/directory/directory';
import Dropdown from '../../components/dropdown/Dropdown';
import ScreenToggleButton from '../../components/screen-toggle-button/ScreenToggleButton';
import Audio from '../../components/audio/Audio'
import ImageModal from '../../pages/image-modal/ImageModal';
import WittnerLogo from '../../assets/logo/wittner-logo.PNG';
import { BiSolidUpArrow } from "react-icons/bi";
import './Catalog.styles.scss';


const Catalog = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);

  const [ playingId, setPlayingId ] = useState(null);
  const handleAudioEnded = () => setPlayingId(null);

  // const handleOpen = ( imgUrl, title, item ) => {
  //   setSelectedImg(imgUrl);
  //   setSelectedTitle(title);
  //   setShowModal(true);
  // };

  // const handleClose = () => setShowModal(false);

  // const location = useLocation();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  // return ( 
  //   <div key={location.path === "catalog-list" ? "catalog" : "other"} className="list-container page-fade-in">
  //     <div className="catalog-controls-bar">
  //       <div className="catalog-dropdown">
  //         <Dropdown />
  //       </div>
  //       <div className="logo-container">
  //         <div className="wittner-logo">
  //           <img src={WittnerLogo} alt="Museum Logo" />
  //         </div>
  //       </div>
  //       <div className="catalog-screen-toggle">
  //         <ScreenToggleButton />
  //       </div>
  //     </div>
  //     <ul className="list-grid">
  //       {directory.map((item, i) => (
  //         <li key={item.id}>
  //           <div className="list-items-container">
  //             <div className="audio-label">
  //               {item.audio && <span className="label-text">audio</span>}
  //             </div>
  //             <span className="audio-icon">
  //               {item.audio && (
  //                 <Audio
  //                   item={item}
  //                   isPlaying={playingId === item.id}
  //                   onToggle={() => setPlayingId(playingId === item.id ? null : item.id)}
  //                   onEnded={handleAudioEnded}
  //                 />
  //               )}
  //             </span>
  //             <div className="image-container">
  //               <img 
  //                 src={item.thumbSrc} 
  //                 onClick={() => handleOpen(directory[i].imgSrc, directory[i].title)} 
  //                 className="border-shadow-lg image" 
  //                 alt={item.title}
  //               />
  //             </div>
  //             <div className="info-container">
  //               <div className="id-area">
  //                 <h3>{item.id}</h3>
  //               </div>
  //               <div className="title-area">
  //                 <p>{item.title}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //     <div className="scroll-button-container border-shadow-sm">
  //       <button onClick={scrollToTop} className="scroll-button">
  //         <span className="arrow-top">
  //           <BiSolidUpArrow />
  //         </span>
  //         Back to top
  //       </button>
  //     </div>
  //     <ImageModal 
  //       show={showModal}
  //       onHide={handleClose}
  //       imageSrc={selectedImg}
  //       title={selectedTitle}
  //     />
  //   </div>
  // );

  // CRITICAL IOS AUDIO UNLOCK HOTFIX:
  // The first time a user interacts anywhere inside the list grid, we safely 
  // pre-prime the audio permission state so iPhone Safari clears the audio gate restriction.
  const handleIOSAudioPrime = () => {
    window.removeEventListener('click', handleIOSAudioPrime);
    window.removeEventListener('touchstart', handleIOSAudioPrime);

    // Create a temporary, silent audio check stream to satisfy the iOS user-activation rule
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      console.log('Audio Context prime bypassed:', e);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleIOSAudioPrime);
    window.addEventListener('touchstart', handleIOSAudioPrime);

    return () => {
      window.removeEventListener('click', handleIOSAudioPrime);
      window.removeEventListener('touchstart', handleIOSAudioPrime);
    };
  }, []);

  const handleOpen = ( imgUrl, title, item ) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return ( 
    <div key={location.path === "catalog-list" ? "catalog" : "other"} className="list-container page-fade-in">
      <div className="catalog-controls-bar">
        <div className="catalog-dropdown">
          <Dropdown />
        </div>
        <div className="logo-container">
          <div className="wittner-logo">
            <img src={WittnerLogo} alt="Museum Logo" />
          </div>
        </div>
        <div className="catalog-screen-toggle">
          <ScreenToggleButton />
        </div>
      </div>
      <ul className="list-grid">
        {directory.map((item, i) => (
          <li key={item.id}>
            <div className="list-items-container">
              <div className="audio-label">
                {item.audio && <span className="label-text">audio</span>}
              </div>
              <span className="audio-icon">
                {item.audio && (
                  <Audio
                    item={item}
                    isPlaying={playingId === item.id}
                    // Explicitly include an auxiliary validation trigger on click
                    onToggle={() => {
                      handleIOSAudioPrime(); // Backup protection rule
                      setPlayingId(playingId === item.id ? null : item.id);
                    }}
                    onEnded={handleAudioEnded}
                  />
                )}
              </span>
              <div className="image-container">
                <img 
                  src={item.thumbSrc} 
                  onClick={() => handleOpen(directory[i].imgSrc, directory[i].title)} 
                  className="border-shadow-lg image" 
                  alt={item.title}
                />
              </div>
              <div className="info-container">
                <div className="id-area">
                  <h3>{item.id}</h3>
                </div>
                <div className="title-area">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="scroll-button-container border-shadow-sm">
        <button onClick={scrollToTop} className="scroll-button">
          <span className="arrow-top">
            <BiSolidUpArrow />
          </span>
          Back to top
        </button>
      </div>
      <ImageModal 
        show={showModal}
        onHide={handleClose}
        imageSrc={selectedImg}
        title={selectedTitle}
      />
    </div>
  );
};

export default Catalog;