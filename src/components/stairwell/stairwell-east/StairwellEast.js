import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './StairwellEast.styles.scss';

const StairwellEast = () => {
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
    <div className="stairwell-east-container">
      <div className="stairwell-east-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stairwell-east-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[151].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img 
              src={directory[152].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[153].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[154].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[155].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img 
              src={directory[156].imgSrc}
            />
          </div>
          <div className="border-shadow-lg sub-section-1-7">
            <img 
              src={directory[157].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-8">
            <img 
              src={directory[158].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-9">
            <img 
              src={directory[159].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-10">
            <img 
              src={directory[160].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stairwell-east-column-2">
          <div className="sub-section-2-1">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
          <div className="stairs-container sub-section-2-2">
            <div className="steps-container">
              <div className="steps step-1"></div>
              <div className="steps step-2"></div>
              <div className="steps step-3"></div>
              <div className="steps step-4"></div>
              <div className="steps step-5"></div>
              <div className="steps step-6"></div>
            </div>
          </div>
          <div className="border-shadow-lg sub-section-2-3">
            <img 
              src={directory[161].imgSrc}
              onClick={() => handleOpen(directory[161].imgSrc, directory[161].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[162].imgSrc}
              onClick={() => handleOpen(directory[162].imgSrc, directory[162].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img
              src={directory[163].imgSrc}
              onClick={() => handleOpen(directory[163].imgSrc, directory[163].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-6">
            <img 
              src={directory[164].imgSrc}
              onClick={() => handleOpen(directory[164].imgSrc, directory[164].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-7">
            <img 
              src={directory[165].imgSrc}
              onClick={() => handleOpen(directory[165].imgSrc, directory[165].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stairwell-south-column-3">
          <div className="border-shadow-sm sub-section-3-1">
            <img 
              src={directory[166].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img
              src={directory[167].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[168].imgSrc}           
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[169].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-5">
            <img 
              src={directory[170].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-6">
            <img 
              src={directory[171].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-7">
            <img 
              src={directory[172].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-8">
            <img 
              src={directory[173].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-9">
            <img 
              src={directory[174].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-10">
            <img 
              src={directory[175].imgSrc}
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
export default StairwellEast;