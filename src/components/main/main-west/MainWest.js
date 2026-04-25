import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './MainWest.styles.scss';

const MainWest = () => {
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
    <div className="main-room-west-container">
      <div className="main-room-west-grid">

        {/* ---------------------- Column 1 ------------------------ */}

        <div className="section west-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[137].imgSrc} 
              onClick={() => handleOpen(directory[137].imgSrc, directory[137].title)}
              loading="lazy"
            />
            
          </div>
        </div>

        {/* ---------------------- Column 2 ------------------------ */}

        <div className="section west-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[138].imgSrc}
              onClick={() => handleOpen(directory[138].imgSrc, directory[138].title)}
              loading="lazy" 
            />
          </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section west-column-3">
          <div className="exit-container">
            <div className="exit-sign">EXIT</div>
            <div className="exit-door-frame"></div>
          </div>
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[139].imgSrc} 
              onClick={() => handleOpen(directory[139].imgSrc, directory[139].title)}
              loading="lazy"
            />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section west-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[140].imgSrc} 
              onClick={() => handleOpen(directory[140].imgSrc, directory[140].title)}
              loading="lazy"
            />
          </div>
        </div>
      
        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section west-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img 
              src={directory[141].imgSrc} 
              onClick={() => handleOpen(directory[141].imgSrc, directory[141].title)}
              loading="lazy"
            />  
          </div>
        </div>
        {/* ---------------------- Column 6 ------------------------ */}

        <div className="section west-column-6">
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

        <div className="section west-column-8">
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

export default MainWest;