import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { directory } from '../../pages/directory/directory';
import Audio from '../../components/audio/Audio'
import ImageModal from '../../pages/image-modal/ImageModal';
import { RxSpeakerLoud } from "react-icons/rx";
import './Catalog.styles.scss';


const Catalog = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);

  const [ playingId, setPlayingId ] = useState(null);
  const handleAudioEnded = () => setPlayingId(null);

  const handleOpen = ( imgUrl, title, item ) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const location = useLocation();

  return (
   <div key={location.path === "catalog-list" ? "catalog" : "other"} className="list-container page-fade-in">
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
                  onToggle={() => setPlayingId(playingId === item.id ? null : item.id)}
                  onEnded={handleAudioEnded}
                />
              )}
            </span>
            <div className="image-container">
              <img 
                src={item.imgSrc} 
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