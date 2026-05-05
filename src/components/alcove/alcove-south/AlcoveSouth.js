import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './AlcoveSouth.styles.scss';

const AlcoveSouth = () => {
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
    <div className="alcove-south-container">
      <div className="alcove-south-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section alcove-south-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[75].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img 
              src={directory[76].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[77].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[78].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[79].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img 
              src={directory[80].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section alcove-south-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[81].imgSrc}
              onClick={() => handleOpen(directory[81].imgSrc, directory[81].title)}
            />
          </div>
          <div className="alcove-exit-container">
            <div className="alcove-exit">
              <div className="border-shadow-lg sub-section-2-2">
                <img 
                  src={directory[96].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-3">
                <img 
                  src={directory[97].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-4">
                <img 
                  src={directory[98].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-5">
                <img 
                  src={directory[99].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-6">
                <img 
                  src={directory[100].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-7">
                <img 
                  src={directory[101].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-8">
                <img 
                  src={directory[102].imgSrc}
                />
              </div>
            </div>
          </div>
          
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section alcove-south-column-3">
          <div className="border-shadow-sm sub-section-3-1">
            <img 
              src={directory[82].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img
              src={directory[83].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[84].imgSrc}            
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[85].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-5">
            <img 
              src={directory[86].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-6">
            <img 
              src={directory[87].imgSrc}
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

export default AlcoveSouth;