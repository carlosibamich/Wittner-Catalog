import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './StairwellWest.styles.scss';

const StairwellWest = () => {
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
    <div className="stairwell-west-container">
      <div className="stairwell-west-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stairwell-west-column-1">
          <div className="border-shadow-sm sub-section-1-1">
            <img 
              src={directory[173].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img 
              src={directory[174].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img 
              src={directory[175].imgSrc}
            />
          </div>
          <div className="border-shadow-lg sub-section-1-4">
            <img 
              src={directory[176].imgSrc}
            />
          </div> 
          <div className="border-shadow-lg sub-section-1-5">
            <img 
              src={directory[177].imgSrc}
            />
          </div> 
          <div className="sub-section-1-6">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stairwell-west-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[178].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[179].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img
              src={directory[180].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[181].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[182].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stairwell-west-column-3">
          <div className="border-shadow-sm sub-section-3-1">
            <img 
              src={directory[183].imgSrc}
              onClick={() => handleOpen(directory[183].imgSrc, directory[183].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img
              src={directory[184].imgSrc}
              onClick={() => handleOpen(directory[184].imgSrc, directory[184].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[185].imgSrc}
              onClick={() => handleOpen(directory[185].imgSrc, directory[185].title)}           
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[186].imgSrc}
              onClick={() => handleOpen(directory[186].imgSrc, directory[186].title)}
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
          <div className="border-shadow-sm sub-section-4-1">
            <img 
              src={directory[142].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img
              src={directory[143].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img
              src={directory[144].imgSrc}            
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[145].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[146].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-6">
            <img 
              src={directory[147].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-7">
            <img 
              src={directory[148].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-8">
            <img 
              src={directory[149].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stairwell-west-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[150].imgSrc}
            />
          </div> 
          <div className="sub-section-5-2">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
          <div className="border-shadow-sm sub-section-5-3">
            <img 
              src={directory[152].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-4">
            <img
              src={directory[153].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-5">
            <img 
              src={directory[154].imgSrc}
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