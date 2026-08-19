import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './GreenRoomNorth.styles.scss';

const GreenRoomNorth = () => {
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
    <div className="green-room-north-container">
      <div className="green-room-north-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section green-room-north-column-1">
        <div className="border-shadow sub-section-1-1">
          <img 
            src={directory[187].thumbSrc} 
            onClick={() => handleOpen(directory[187].imgSrc, directory[187].title)}
            alt={directory[187].title}
          />
        </div>
        <div className="border-shadow sub-section-1-2">
          <img 
            src={directory[188].thumbSrc} 
            onClick={() => handleOpen(directory[188].imgSrc, directory[188].title)}
            alt={directory[188].title}
          />
        </div>
        <div className="border-shadow sub-section-1-3">
          <img 
            src={directory[189].thumbSrc} 
            onClick={() => handleOpen(directory[189].imgSrc, directory[189].title)}
            alt={directory[189].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section green-room-north-column-2">
        <div className="exit-door-container">
              <div className="white-door-frame">
                <div className="white-door"></div>
              </div>
            </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section green-room-north-column-3">
          <div className="border-shadow sub-section-3-1">
          <img 
            src={directory[190].thumbSrc} 
            onClick={() => handleOpen(directory[190].imgSrc, directory[190].title)}
            alt={directory[190].title}
          />
        </div>
        <div className="border-shadow sub-section-3-2">
          <img 
            src={directory[191].thumbSrc} 
            onClick={() => handleOpen(directory[191].imgSrc, directory[191].title)}
            alt={directory[191].title}
          />
        </div>
        <div className="border-shadow sub-section-3-3">
          <img 
            src={directory[192].thumbSrc} 
            onClick={() => handleOpen(directory[192].imgSrc, directory[192].title)}
            alt={directory[192].title}
          />
        </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section green-room-north-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <div className="window-frame">
              <div className="window-pane pane-left"></div>
              <div className="window-pane pane-right top"></div>
              <div className="window-pane pane-right bottom"></div>
            </div>
          </div>
          <div className="border-shadow sub-section-4-2">
          <img 
            src={directory[193].thumbSrc} 
            onClick={() => handleOpen(directory[193].imgSrc, directory[193].title)}
            alt={directory[193].title}
          />
        </div>
        </div>

        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section green-room-north-column-5">
          <div className="border-shadow sub-section-5-1">
            <img 
              src={directory[194].thumbSrc} 
              onClick={() => handleOpen(directory[194].imgSrc, directory[194].title)}
              alt={directory[194].title}
            />
          </div>
          <div className="border-shadow sub-section-5-2">
            <img 
              src={directory[195].thumbSrc} 
              onClick={() => handleOpen(directory[195].imgSrc, directory[195].title)}
              alt={directory[195].title}
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

export default GreenRoomNorth;