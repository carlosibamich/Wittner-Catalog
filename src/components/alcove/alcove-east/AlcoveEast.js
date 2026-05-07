import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './AlcoveEast.styles.scss';

const AlcoveEast = () => {
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
    <div className="alcove-east-container">
      <div className="alcove-east-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section alcove-east-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[65].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img 
              src={directory[66].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[67].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[68].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[69].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img 
              src={directory[70].imgSrc}
            />
          </div>
          <div className="border-shadow-lg sub-section-1-7">
            <img 
              src={directory[71].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-8">
            <img 
              src={directory[72].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-9">
            <img 
              src={directory[73].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-10">
            <img 
              src={directory[74].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section alcove-east-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[75].imgSrc}
              onClick={() => handleOpen(directory[75].imgSrc, directory[75].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[76].imgSrc}
              onClick={() => handleOpen(directory[76].imgSrc, directory[76].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img
              src={directory[77].imgSrc}
              onClick={() => handleOpen(directory[77].imgSrc, directory[77].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[78].imgSrc}
              onClick={() => handleOpen(directory[78].imgSrc, directory[78].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[79].imgSrc}
              onClick={() => handleOpen(directory[79].imgSrc, directory[79].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-6">
            <img 
              src={directory[80].imgSrc}
              onClick={() => handleOpen(directory[80].imgSrc, directory[80].title)}
            />
          </div> 
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section alcove-east-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[81].imgSrc} 
            />
          </div>
          <div className="alcove-exit-container">
            <div className="alcove-exit">
              <div className="border-shadow-lg sub-section-3-2">
                <img 
                  src={directory[96].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-3-3">
                <img 
                  src={directory[97].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-3-4">
                <img 
                  src={directory[98].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-3-5">
                <img 
                  src={directory[99].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-3-6">
                <img 
                  src={directory[100].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-3-7">
                <img 
                  src={directory[101].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-3-8">
                <img 
                  src={directory[102].imgSrc}
                />
              </div>
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

export default AlcoveEast;