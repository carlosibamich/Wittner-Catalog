import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './EntrySouth.styles.scss';

const EntrySouth = () => {
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
      <div className="entry-south-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section entry-south-column-1">
        <div className="window-frame-s">
          <div className="window-pane-s pane-s-left"></div>
          <div className="window-pane-s pane-s-right"></div>
        </div>
        <div className="border-shadow-lg sub-section-1-1">
           <img 
            src={directory[5].imgSrc}
            loading="lazy"
          />
        </div>
        <div className="border-shadow-lg sub-section-1-2">
           <img 
            src={directory[6].imgSrc}
            loading="lazy"
          />
        </div>
        <div className="border-shadow-lg sub-section-1-3">
           <img 
            src={directory[8].imgSrc}
            loading="lazy"
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section entry-south-column-2">
        <div className="border-shadow-lg sub-section-2-1">
          <img 
            src={directory[9].imgSrc} 
            onClick={() => handleOpen(directory[9].imgSrc, directory[9].title)}
            loading="lazy"
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section entry-south-column-3">
          <div className="window-frame-s">
            <div className="window-pane-s pane-s-left"></div>
            <div className="window-pane-s pane-s-right"></div>
          </div>
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[10].imgSrc}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-lg sub-section-3-2">
            <img 
              src={directory[11].imgSrc}
              loading="lazy"
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

export default EntrySouth;