import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './AlcoveNorth.styles.scss';

const AlcoveNorth = () => {
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
    <div className="alcove-north-container">
      <div className="alcove-north-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section alcove-north-column-1">
          <div className="border-shadow-sm sub-section-1-1">
            <img 
              src={directory[82].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img
              src={directory[83].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[84].imgSrc}            
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[85].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[86].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img 
              src={directory[87].imgSrc}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section alcove-north-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[65].imgSrc}
              onClick={() => handleOpen(directory[65].imgSrc, directory[65].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[66].imgSrc}
              onClick={() => handleOpen(directory[66].imgSrc, directory[66].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img
              src={directory[67].imgSrc}
              onClick={() => handleOpen(directory[67].imgSrc, directory[67].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[68].imgSrc}
              onClick={() => handleOpen(directory[68].imgSrc, directory[68].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[69].imgSrc}
              onClick={() => handleOpen(directory[69].imgSrc, directory[69].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-6">
            <img 
              src={directory[70].imgSrc}
              onClick={() => handleOpen(directory[70].imgSrc, directory[70].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-2-7">
            <img 
              src={directory[71].imgSrc}
              onClick={() => handleOpen(directory[71].imgSrc, directory[71].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-8">
            <img 
              src={directory[72].imgSrc}
              onClick={() => handleOpen(directory[72].imgSrc, directory[72].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-9">
            <img 
              src={directory[73].imgSrc}
              onClick={() => handleOpen(directory[73].imgSrc, directory[73].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-10">
            <img 
              src={directory[74].imgSrc}
              onClick={() => handleOpen(directory[74].imgSrc, directory[74].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section alcove-north-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[75].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[76].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[77].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[78].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-5">
            <img 
              src={directory[79].imgSrc}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-6">
            <img 
              src={directory[80].imgSrc}
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
export default AlcoveNorth;