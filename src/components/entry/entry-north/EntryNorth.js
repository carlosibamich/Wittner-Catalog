import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './EntryNorth.styles.scss';

const EntryNorth = () => {
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
    <div className="entry-room-container">
      <div className="entry-north-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section entry-north-column-1">
        <div className="sub-section-1-1">
           <img 
            src={directory[13].thumbSrc}
          />
        </div>
        <div className="sub-section-1-2">
           <img 
            src={directory[14].thumbSrc}
          />
        </div>
        <div className="window-frame">
          <div className="window-pane pane-left"></div>
          <div className="window-pane pane-right"></div>
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section entry-north-column-2">
        <div className="border-shadow sub-section-2-1">
          <img 
            src={directory[0].thumbSrc} 
            onClick={() => handleOpen(directory[0].imgSrc, directory[0].title)}
            alt={directory[0].title}
          />
        </div>
        <div className="border-shadow sub-section-2-2">
          <img 
            src={directory[1].thumbSrc} 
            onClick={() => handleOpen(directory[1].imgSrc, directory[1].title)}
            alt={directory[1].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section entry-north-column-3">
          <div className="sub-section-3-1">
            <img 
              src={directory[2].thumbSrc}
            />
          </div>
          <div className="sub-section-3-2">
            <img 
              src={directory[3].thumbSrc}
            />
          </div>
          <div className="window-frame">
            <div className="window-pane pane-left"></div>
            <div className="window-pane pane-right"></div>
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

export default EntryNorth;