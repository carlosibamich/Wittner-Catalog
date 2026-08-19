import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './GreenRoomWest.styles.scss';

const GreenRoomWest = () => {
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
    <div className="green-room-west-container">
      <div className="green-room-west-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section green-room-west-column-1">
        <div className="exit-container">
            <div className="exit-door-container">
              <div className="white-door-frame">
                <div className="white-door"></div>
              </div>
            </div>
          </div>
        <div className="border-shadow sub-section-1-1">
          <img 
            src={directory[214].thumbSrc} 
            onClick={() => handleOpen(directory[214].imgSrc, directory[214].title)}
            alt={directory[214].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section green-room-west-column-2">
        <div className="border-shadow sub-section-2-1">
          <img 
            src={directory[215].thumbSrc} 
            onClick={() => handleOpen(directory[215].imgSrc, directory[215].title)}
            alt={directory[215].title}
          />
        </div>
        <div className="border-shadow sub-section-2-2">
          <img 
            src={directory[216].thumbSrc} 
            onClick={() => handleOpen(directory[216].imgSrc, directory[216].title)}
            alt={directory[216].title}
          />
        </div>
        <div className="border-shadow sub-section-2-3">
          <img 
            src={directory[217].thumbSrc} 
            onClick={() => handleOpen(directory[217].imgSrc, directory[217].title)}
            alt={directory[217].title}
          />
        </div>
        <div className="border-shadow sub-section-2-4">
          <img 
            src={directory[218].thumbSrc} 
            onClick={() => handleOpen(directory[218].imgSrc, directory[218].title)}
            alt={directory[218].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section green-room-west-column-3">
          <div className="border-shadow sub-section-3-1">
          <img 
            src={directory[219].thumbSrc} 
            onClick={() => handleOpen(directory[219].imgSrc, directory[219].title)}
            alt={directory[219].title}
          />
        </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section green-room-west-column-4">
          <div className="border-shadow sub-section-4-1">
            <img 
              src={directory[220].thumbSrc} 
              onClick={() => handleOpen(directory[220].imgSrc, directory[220].title)}
              alt={directory[220].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section green-room-west-column-5">
          <div className="border-shadow sub-section-5-1">
            <img 
              src={directory[221].thumbSrc} 
              onClick={() => handleOpen(directory[221].imgSrc, directory[221].title)}
              alt={directory[221].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 6 ------------------------ */}

        <div className="section green-room-west-column-6">
          <div className="border-shadow sub-section-6-1">
            <img 
              src={directory[222].thumbSrc} 
              onClick={() => handleOpen(directory[222].imgSrc, directory[222].title)}
              alt={directory[222].title}
            />
          </div>
          <div className="border-shadow sub-section-6-2">
            <img 
              src={directory[223].thumbSrc} 
              onClick={() => handleOpen(directory[223].imgSrc, directory[223].title)}
              alt={directory[223].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 7 ------------------------ */}

        <div className="section green-room-west-column-7">
          <div className="border-shadow sub-section-7-1">
            <img 
              src={directory[224].thumbSrc} 
              onClick={() => handleOpen(directory[224].imgSrc, directory[224].title)}
              alt={directory[224].title}
            />
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
  );
};

export default GreenRoomWest;