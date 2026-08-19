import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './StairwellWest.styles.scss';

const StairwellWest = () => {
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
    <div className="stairwell-west-container">
      <div className="stairwell-west-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stairwell-west-column-1">
          <div className="sub-section-1-1">
            <img 
              src={directory[173].thumbSrc}
            />
          </div>
          <div className="sub-section-1-2">
            <img 
              src={directory[174].thumbSrc}
            />
          </div>
          <div className="sub-section-1-3">
            <img 
              src={directory[175].thumbSrc}
            />
          </div>
          <div className="sub-section-1-4">
            <img 
              src={directory[176].thumbSrc}
            />
          </div> 
          <div className="sub-section-1-5">
            <img 
              src={directory[177].thumbSrc}
            />
          </div> 
          <div className="sub-section-1-6">
              <div className="white-door"></div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stairwell-west-column-2">
          <div className="sub-section-2-1">
            <img 
              src={directory[178].thumbSrc}
              loading="lazy"
            />
          </div>
          <div className="sub-section-2-2">
            <img 
              src={directory[179].thumbSrc}
            />
          </div>
          <div className="sub-section-2-3">
            <img
              src={directory[180].thumbSrc}
            />
          </div>
          <div className="sub-section-2-4">
            <img 
              src={directory[181].thumbSrc}
            />
          </div>
          <div className="sub-section-2-5">
            <img 
              src={directory[182].thumbSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stairwell-west-column-3">
          <div className="border-shadow sub-section-3-1">
            <img 
              src={directory[183].thumbSrc}
              onClick={() => handleOpen(directory[183].imgSrc, directory[183].title)}
              alt={directory[183].title}
            />
          </div>
          <div className="border-shadow sub-section-3-2">
            <img
              src={directory[184].thumbSrc}
              onClick={() => handleOpen(directory[184].imgSrc, directory[184].title)}
              alt={directory[184].title}
            />
          </div>
          <div className="border-shadow sub-section-3-3">
            <img
              src={directory[185].thumbSrc}
              onClick={() => handleOpen(directory[185].imgSrc, directory[185].title)}
              alt={directory[185].title}          
            />
          </div>
          <div className="border-shadow sub-section-3-4">
            <img 
              src={directory[186].thumbSrc}
              onClick={() => handleOpen(directory[186].imgSrc, directory[186].title)}
              alt={directory[186].title}
            />
          </div>
          <div className="sub-section-3-5">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stairwell-west-column-4">
          <div className="sub-section-4-1">
            <img 
              src={directory[142].thumbSrc}
            />
          </div>
          <div className="sub-section-4-2">
            <img
              src={directory[143].thumbSrc}
            />
          </div>
          <div className="sub-section-4-3">
            <img
              src={directory[144].thumbSrc}            
            />
          </div>
          <div className="sub-section-4-4">
            <img 
              src={directory[145].thumbSrc}
            />
          </div>
          <div className="sub-section-4-5">
            <img 
              src={directory[146].thumbSrc}
            />
          </div>
          <div className="sub-section-4-6">
            <img 
              src={directory[147].thumbSrc}
            />
          </div>
          <div className="sub-section-4-7">
            <img 
              src={directory[148].thumbSrc}
            />
          </div>
          <div className="sub-section-4-8">
            <img 
              src={directory[149].thumbSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stairwell-west-column-5">
          <div className="sub-section-5-1">
            <img 
              src={directory[150].thumbSrc}
              loading="lazy"
            />
          </div> 
          <div className="sub-section-5-2">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
          <div className="sub-section-5-3">
            <img 
              src={directory[152].thumbSrc}
            />
          </div>
          <div className="sub-section-5-4">
            <img
              src={directory[153].thumbSrc}
            />
          </div>
          <div className="sub-section-5-5">
            <img 
              src={directory[154].thumbSrc}
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
  )
};
export default StairwellWest;