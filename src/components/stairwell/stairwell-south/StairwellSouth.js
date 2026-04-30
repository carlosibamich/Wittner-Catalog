import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './StairwellSouth.styles.scss';

const StairwellSouth = () => {
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
    <div className="stairwell-south-container">
      <div className="stairwell-south-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stairwell-south-column-1">
          <div className="sub-section-1-1">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
          <div className="stairs-container sub-section-1-2">
            <div className="steps-container">
              <div className="steps step-1"></div>
              <div className="steps step-2"></div>
              <div className="steps step-3"></div>
              <div className="steps step-4"></div>
              <div className="steps step-5"></div>
              <div className="steps step-6"></div>
            </div>
          </div>

          <div className="border-shadow-lg sub-section-1-3">
            <img 
              src={directory[161].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[162].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img
              src={directory[163].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img 
              src={directory[164].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-7">
            <img 
              src={directory[165].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stairwell-south-column-2">
          <div className="border-shadow-sm sub-section-2-1">
            <img 
              src={directory[166].imgSrc}
              onClick={() => handleOpen(directory[166].imgSrc, directory[166].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img
              src={directory[167].imgSrc}
              onClick={() => handleOpen(directory[167].imgSrc, directory[167].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img
              src={directory[168].imgSrc}
              onClick={() => handleOpen(directory[168].imgSrc, directory[168].title)}            
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[169].imgSrc}
              onClick={() => handleOpen(directory[169].imgSrc, directory[169].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[170].imgSrc}
              onClick={() => handleOpen(directory[170].imgSrc, directory[170].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-6">
            <img 
              src={directory[171].imgSrc}
              onClick={() => handleOpen(directory[171].imgSrc, directory[171].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-7">
            <img 
              src={directory[172].imgSrc}
              onClick={() => handleOpen(directory[172].imgSrc, directory[172].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-8">
            <img 
              src={directory[173].imgSrc}
              onClick={() => handleOpen(directory[173].imgSrc, directory[173].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-9">
            <img 
              src={directory[174].imgSrc}
              onClick={() => handleOpen(directory[174].imgSrc, directory[174].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-10">
            <img 
              src={directory[175].imgSrc}
              onClick={() => handleOpen(directory[175].imgSrc, directory[175].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stairwell-south-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[176].imgSrc}
              onClick={() => handleOpen(directory[176].imgSrc, directory[176].title)}
            />
          </div> 
          <div className="border-shadow-lg sub-section-3-2">
            <img 
              src={directory[177].imgSrc}
              onClick={() => handleOpen(directory[177].imgSrc, directory[177].title)}
            />
          </div> 
          <div className="sub-section-3-3">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stairwell-south-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[178].imgSrc}
              onClick={() => handleOpen(directory[178].imgSrc, directory[178].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img 
              src={directory[179].imgSrc}
              onClick={() => handleOpen(directory[179].imgSrc, directory[179].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img
              src={directory[180].imgSrc}
              onClick={() => handleOpen(directory[180].imgSrc, directory[180].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[181].imgSrc}
              onClick={() => handleOpen(directory[181].imgSrc, directory[181].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[182].imgSrc}
              onClick={() => handleOpen(directory[182].imgSrc, directory[182].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stairwell-south-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img 
              src={directory[183].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-2">
            <img
              src={directory[184].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-3">
            <img
              src={directory[185].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-4">
            <img 
              src={directory[186].imgSrc}
            />
          </div>
          <div className="sub-section-5-5">
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
  )

};
export default StairwellSouth;