import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './EntryEast.styles.scss';

const EntryEast = () => {
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
      <div className="entry-east-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section entry-east-column-1">
        <div className="border-shadow-lg sub-section-1-1">
           <img 
            src={directory[2].imgSrc}
            onClick={() => handleOpen(directory[2].imgSrc, directory[2].title)} 
            loading="lazy"
            draggable="false"
            className="no-drag-img"
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section entry-east-column-2">
        <div className="border-shadow-lg sub-section-2-1">
          <img 
            src={directory[3].imgSrc} 
            onClick={() => handleOpen(directory[3].imgSrc, directory[3].title)}
            loading="lazy"
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section entry-east-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[4].imgSrc}
              onClick={() => handleOpen(directory[4].imgSrc, directory[4].title)}
              loading="lazy"
            />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section entry-east-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[5].imgSrc}
              onClick={() => handleOpen(directory[5].imgSrc, directory[5].title)} 
              loading="lazy"
            />
          </div>
        </div>
      
        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section entry-east-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img
              src={directory[6].imgSrc}
              onClick={() => handleOpen(directory[6].imgSrc, directory[6].title)}
              loading="lazy"
            />  
          </div>
        </div>

        {/* ---------------------- Column 6 ------------------------ */}

        <div className="section entry-east-column-6">
          <div className="window-frame">
            <div className="window-pane pane-left"></div>
            <div className="window-pane pane-right"></div>
          </div>
        </div>

        {/* ---------------------- Column 7 ------------------------ */}

        <div className="section door-frame-container">
          <div className="door-frame">
            <div className="door-window-pane-top"></div>
            <div className="door-window-pane-left"></div>
            <div className="door-window-pane-right"></div>
            <div className="door-crossbar"></div>
          </div>
        </div>

        {/* ---------------------- Column 8 ------------------------ */}

        <div className="section entry-east-column-8">
          <div className="border-shadow-sm sub-section-8-1">
            <img
              src={directory[7].imgSrc}
              onClick={() => handleOpen(directory[7].imgSrc, directory[7].title)}
              loading="lazy"
            />  
          </div>
          <div className="window-frame">
            <div className="window-pane pane-left"></div>
            <div className="window-pane pane-right"></div>
          </div>
          <div className="border-shadow-lg sub-section-8-2">
            <img
              src={directory[8].imgSrc}
              onClick={() => handleOpen(directory[8].imgSrc, directory[8].title)}
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

export default EntryEast;