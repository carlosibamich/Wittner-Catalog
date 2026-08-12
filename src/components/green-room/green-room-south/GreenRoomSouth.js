import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './GreenRoomSouth.styles.scss';

const GreenRoomSouth = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);

  const handleOpen = (imgUrl, title) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
  }

  const handleClose = () => setShowModal(false);

  return (
    <div className="green-room-south-container">
      <div className="green-room-south-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section green-room-south-column-1">
        <div className="border-shadow-lg sub-section-1-1">
          <div className="window-frame">
            <div className="window-pane pane-left"></div>
            <div className="window-pane pane-right top"></div>
            <div className="window-pane pane-right bottom"></div>
          </div>
        </div>
        <div className="border-shadow-sm sub-section-1-2">
          <img 
            src={directory[208].imgSrc} 
            onClick={() => handleOpen(directory[208].imgSrc, directory[208].title)}
            alt={directory[208].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-3">
          <img 
            src={directory[209].imgSrc} 
            onClick={() => handleOpen(directory[209].imgSrc, directory[209].title)}
            alt={directory[209].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-4">
          <img 
            src={directory[210].imgSrc} 
            onClick={() => handleOpen(directory[210].imgSrc, directory[210].title)}
            alt={directory[210].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

        <div className="section green-room-south-column-2">
          <div className="border-shadow-sm sub-section-2-1">
          <img 
            src={directory[211].imgSrc} 
            onClick={() => handleOpen(directory[211].imgSrc, directory[211].title)}
            alt={directory[211].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-2">
          <img 
            src={directory[212].imgSrc} 
            onClick={() => handleOpen(directory[212].imgSrc, directory[212].title)}
            alt={directory[212].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-3">
          <img 
            src={directory[213].imgSrc} 
            onClick={() => handleOpen(directory[213].imgSrc, directory[213].title)}
            alt={directory[213].title}
          />
        </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section green-room-south-column-3">
          <div className="exit-door-container">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
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

export default GreenRoomSouth;