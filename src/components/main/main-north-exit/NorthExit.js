import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './NorthExit.styles.scss';

const NorthExit = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);
  const [ selectedAudio, setSelectedAudio ] = useState(null);
  
  const handleOpen = (imgUrl, title) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
    setSelectedImg(null);
    setSelectedTitle(null);
    setSelectedAudio(null);
  };

  return (
    <div className="main-room-container">
      <div className="main-room-north-exit-grid">

        {/* ---------------------- Column 1 ------------------------ */}
        <div className="section north-exit-column-1">
          <div className="exit-container">
            <div className="exit-sign-container">
              <div className="exit-sign">EXIT</div>
            </div>
            <div className="exit-door-container">
              <div className="white-door-frame">
                <div className="white-door"></div>
              </div>
            </div>
          </div>
          <div className="sub-section-1-1">
            <img src={directory[54].thumbSrc} />
          </div>
          <div className="sub-section-1-2">
            <img src={directory[55].thumbSrc} />
          </div>
          <div className="sub-section-1-3">
            <img src={directory[56].thumbSrc} />
          </div>
          <div className="sub-section-1-4">
            <img src={directory[57].thumbSrc} />
          </div>
          <div className="sub-section-1-5">
            <img src={directory[58].thumbSrc} />
          </div>
          <div className="sub-section-1-6">
            <img src={directory[59].thumbSrc} />
          </div>
          <div className="sub-section-1-7">
            <img src={directory[60].thumbSrc} />
          </div>
        </div>

        {/* ---------------------- Column 2 ------------------------ */}

        <div className="section north-exit-column-2">
          <div className="border-shadow sub-section-2-1">
            <img 
              src={directory[61].thumbSrc} 
              onClick={() => handleOpen(directory[61].imgSrc, directory[61].title)}
              alt={directory[61].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-2-2">
            <img 
              src={directory[62].thumbSrc} 
              onClick={() => handleOpen(directory[62].imgSrc, directory[62].title)}
              alt={directory[62].title}
              loading="lazy"
            />
          </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section north-exit-column-3">
          <div className="border-shadow sub-section-3-1">
            <img 
              src={directory[63].thumbSrc} 
              onClick={() => handleOpen(directory[63].imgSrc, directory[63].title)}
              alt={directory[63].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-3-2">
            <img 
              src={directory[64].thumbSrc} 
              onClick={() => handleOpen(directory[64].imgSrc, directory[64].title)}
              alt={directory[64].title}
              loading="lazy"
            />  
          </div>
        </div>
      
        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section north-exit-column-4">
          <div className="sub-section-4-1">
            <img src={directory[89].thumbSrc} />  
          </div>
          <div className="sub-section-4-2">
            <img src={directory[90].thumbSrc} /> 
          </div>
          <div className="sub-section-4-3">
            <img src={directory[91].thumbSrc} />
          </div>
          <div className="sub-section-4-4">
            <img src={directory[92].thumbSrc} />
          </div>
        </div>
      </div>
      <ImageModal 
        show={showModal}
        onHide={handleClose}
        imageSrc={selectedImg}
        title={selectedTitle}
      />
    </div>
  )
};

export default NorthExit;