import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './StairwellNorth.styles.scss';

const StairwellNorth = () => {
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
    <div className="stairwell-north-container">
      <div className="stairwell-north-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stairwell-north-column-1">
          
        </div>
        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stairwell-north-column-2">
          <div className="border-shadow-sm sub-section-2-1">
            <img 
              src={directory[142].imgSrc}
              onClick={() => handleOpen(directory[142].imgSrc, directory[142].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img
              src={directory[143].imgSrc}
              onClick={() => handleOpen(directory[143].imgSrc, directory[143].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img
              src={directory[144].imgSrc}
              onClick={() => handleOpen(directory[144].imgSrc, directory[144].title)}            
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[145].imgSrc}
              onClick={() => handleOpen(directory[145].imgSrc, directory[145].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[146].imgSrc}
              onClick={() => handleOpen(directory[146].imgSrc, directory[146].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-6">
            <img 
              src={directory[147].imgSrc}
              onClick={() => handleOpen(directory[147].imgSrc, directory[147].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-7">
            <img 
              src={directory[148].imgSrc}
              onClick={() => handleOpen(directory[148].imgSrc, directory[148].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-8">
            <img 
              src={directory[149].imgSrc}
              onClick={() => handleOpen(directory[149].imgSrc, directory[149].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stairwell-north-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[150].imgSrc}
              onClick={() => handleOpen(directory[150].imgSrc, directory[150].title)}
            />
          </div> 
          <div className="sub-section-3-2">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stairwell-north-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[151].imgSrc}
              onClick={() => handleOpen(directory[151].imgSrc, directory[151].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img 
              src={directory[152].imgSrc}
              onClick={() => handleOpen(directory[152].imgSrc, directory[152].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img
              src={directory[153].imgSrc}
              onClick={() => handleOpen(directory[153].imgSrc, directory[153].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[154].imgSrc}
              onClick={() => handleOpen(directory[154].imgSrc, directory[154].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[155].imgSrc}
              onClick={() => handleOpen(directory[155].imgSrc, directory[155].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-6">
            <img 
              src={directory[156].imgSrc}
              onClick={() => handleOpen(directory[156].imgSrc, directory[156].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-7">
            <img 
              src={directory[157].imgSrc}
              onClick={() => handleOpen(directory[157].imgSrc, directory[157].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-8">
            <img 
              src={directory[158].imgSrc}
              onClick={() => handleOpen(directory[158].imgSrc, directory[158].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-9">
            <img 
              src={directory[159].imgSrc}
              onClick={() => handleOpen(directory[159].imgSrc, directory[159].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-10">
            <img 
              src={directory[160].imgSrc}
              onClick={() => handleOpen(directory[160].imgSrc, directory[160].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stairwell-north-column-5">
          
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
export default StairwellNorth;