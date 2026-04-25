import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './EntryNorth.styles.scss';

const EntryNorth = () => {
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
    <div className="entry-room-container">
      <div className="entry-north-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section entry-north-column-1">
        <div className="border-shadow-lg sub-section-1-1">
           <img 
            src={directory[13].imgSrc}
          />
        </div>
        <div className="border-shadow-lg sub-section-1-2">
           <img 
            src={directory[14].imgSrc}
          />
        </div>
        <div className="window-frame-n">
          <div className="window-pane-n pane-n-left"></div>
          <div className="window-pane-n pane-n-right"></div>
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section entry-north-column-2">
        <div className="border-shadow-lg sub-section-2-1">
          <img 
            src={directory[0].imgSrc} 
            onClick={() => handleOpen(directory[0].imgSrc, directory[0].title)}
          />
        </div>
        <div className="border-shadow-lg sub-section-2-2">
          <img 
            src={directory[1].imgSrc} 
            onClick={() => handleOpen(directory[1].imgSrc, directory[1].title)}
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section entry-north-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[2].imgSrc}
            />
          </div>
          <div className="border-shadow-lg sub-section-3-2">
            <img 
              src={directory[3].imgSrc}
            />
          </div>
          <div className="window-frame-n">
            <div className="window-pane-n pane-n-left"></div>
            <div className="window-pane-n pane-n-right"></div>
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