import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './NorthExit.styles.scss';

const NorthExit = () => {

  // -------------- React Bootstrap Modal ----------------- //
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);
  
  const handleOpen = (imgUrl, title) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setShowModal(true);
  }
  
  const handleClose = () => setShowModal(false);
  // ---------------------- End ---------------------- //

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
          <div className="border-shadow-lg sub-section-1-1">
            <img src={directory[54].imgSrc} />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img src={directory[55].imgSrc} />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img src={directory[56].imgSrc} />
          </div>
          <div className="border-shadow-lg sub-section-1-4">
            <img src={directory[57].imgSrc} />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img src={directory[58].imgSrc} />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img src={directory[59].imgSrc} />
          </div>
          <div className="border-shadow-sm sub-section-1-7">
            <img src={directory[60].imgSrc} />
          </div>
        </div>

        {/* ---------------------- Column 2 ------------------------ */}

        <div className="section north-exit-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[61].imgSrc} 
              onClick={() => handleOpen(directory[61].imgSrc, directory[61].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-2-2">
            <img 
              src={directory[62].imgSrc} 
              onClick={() => handleOpen(directory[62].imgSrc, directory[62].title)}
            />
          </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section north-exit-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[63].imgSrc} 
              onClick={() => handleOpen(directory[63].imgSrc, directory[63].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-3-2">
            <img 
              src={directory[64].imgSrc} 
              onClick={() => handleOpen(directory[64].imgSrc, directory[64].title)}
            />  
          </div>
        </div>
      
        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section north-exit-column-4">
          <div className="border-shadow-sm sub-section-4-1">
            <img src={directory[89].imgSrc} />  
          </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img src={directory[90].imgSrc} /> 
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img src={directory[91].imgSrc} />
          </div>
          <div className="border-shadow-lg sub-section-4-4">
            <img src={directory[92].imgSrc} />
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