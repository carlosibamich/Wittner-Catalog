import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './EntryWest.styles.scss';

const EntryWest = () => {
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
      <div className="entry-west-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section entry-west-column-1">
        <div className="border-shadow-lg sub-section-1-1">
          <img 
            src={directory[10].imgSrc}
            onClick={() => handleOpen(directory[10].imgSrc, directory[10].title)} 
            loading="lazy"
            draggable="false"
            className="no-drag-img"
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section entry-west-column-2">
        <div className="border-shadow-lg sub-section-2-1">
          <img 
            src={directory[11].imgSrc} 
            onClick={() => handleOpen(directory[11].imgSrc, directory[11].title)}
            loading="lazy"
            draggable="false"
            className="no-drag-img"
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section entry-west-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[12].imgSrc}
              onClick={() => handleOpen(directory[12].imgSrc, directory[12].title)}
              loading="lazy"
              draggable="false"
              className="no-drag-img"
            />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section entry-west-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[13].imgSrc}
              onClick={() => handleOpen(directory[13].imgSrc, directory[13].title)} 
              loading="lazy"
              draggable="false"
              className="no-drag-img"
            />
          </div>
        </div>
      
        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section entry-west-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img
              src={directory[14].imgSrc}
              onClick={() => handleOpen(directory[14].imgSrc, directory[14].title)}
              loading="lazy"
              draggable="false"
              className="no-drag-img"
            />  
          </div>
        </div>

        {/* ---------------------- Column 6 ------------------------ */}

        <div className="section entry-west-column-6">
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

        <div className="section entry-west-column-8">
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
    )
}

export default EntryWest;