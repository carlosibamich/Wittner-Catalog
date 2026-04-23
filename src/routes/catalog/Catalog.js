import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { directory } from '../../pages/directory/directory';
import ImageModal from '../../pages/image-modal/ImageModal';
import { RxSpeakerLoud } from "react-icons/rx";
import './Catalog.styles.scss';


const Catalog = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);
  const [ showIcon, setShowIcon ] = useState(false);

  const handleOpen = ( imgUrl, title, icon, item ) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
    setShowIcon(true)
  };

  const handleClose = () => setShowModal(false);

  const location = useLocation();

  return (
   <div key={location.path="catalog-list"} className="list-container page-fade-in">
    <ul className="list-grid">
      {directory.map((item, i) => (
        <li key={item.id}>
          <div 
            className="list-items-container">
            <div key={i.id} className="audio-icon">
              {item.audio && <RxSpeakerLoud />}
            </div>
            <div className="image-container">
              <img 
                src={item.imgSrc} 
                onClick={() => handleOpen(directory[i].imgSrc, directory[i].title)}className="border-shadow-lg image" />
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
      icon={showIcon}
    />
   </div>
  );
};

export default Catalog;