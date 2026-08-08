import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './GreenRoomEast.styles.scss';

const GreenRoomEast = () => {
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
    <div className="green-room-east-container">
      <div className="green-room-east-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section green-room-east-column-1">
        <div className="border-shadow-sm sub-section-1-1">
          <img 
            src={directory[196].imgSrc} 
            onClick={() => handleOpen(directory[196].imgSrc, directory[196].title)}
            alt={directory[196].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section green-room-east-column-2">
        <div className="border-shadow-sm sub-section-2-1">
          <img 
            src={directory[197].imgSrc} 
            onClick={() => handleOpen(directory[197].imgSrc, directory[197].title)}
            alt={directory[197].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-2">
          <img 
            src={directory[198].imgSrc} 
            onClick={() => handleOpen(directory[198].imgSrc, directory[198].title)}
            alt={directory[198].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-3">
          <img 
            src={directory[199].imgSrc} 
            onClick={() => handleOpen(directory[199].imgSrc, directory[199].title)}
            alt={directory[199].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 3 ------------------------ */}

        <div className="section green-room-east-column-3">
          <div className="border-shadow-sm sub-section-3-1">
          <img 
            src={directory[200].imgSrc} 
            onClick={() => handleOpen(directory[200].imgSrc, directory[200].title)}
            alt={directory[200].title}
          />
        </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section green-room-east-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[201].imgSrc} 
              onClick={() => handleOpen(directory[201].imgSrc, directory[201].title)}
              alt={directory[201].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img 
              src={directory[202].imgSrc} 
              onClick={() => handleOpen(directory[202].imgSrc, directory[202].title)}
              alt={directory[202].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img 
              src={directory[203].imgSrc} 
              onClick={() => handleOpen(directory[203].imgSrc, directory[203].title)}
              alt={directory[203].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section green-room-east-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img 
              src={directory[204].imgSrc} 
              onClick={() => handleOpen(directory[204].imgSrc, directory[204].title)}
              alt={directory[204].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 6 ------------------------ */}

        <div className="section green-room-east-column-6">
          <div className="border-shadow-lg sub-section-6-1">
            <img 
              src={directory[205].imgSrc} 
              onClick={() => handleOpen(directory[205].imgSrc, directory[205].title)}
              alt={directory[205].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-6-2">
            <img 
              src={directory[206].imgSrc} 
              onClick={() => handleOpen(directory[206].imgSrc, directory[206].title)}
              alt={directory[206].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 7 ------------------------ */}

        <div className="section green-room-east-column-7">
          <div className="border-shadow-lg sub-section-7-1">
            <img 
              src={directory[207].imgSrc} 
              onClick={() => handleOpen(directory[207].imgSrc, directory[207].title)}
              alt={directory[207].title}
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
  );
};

export default GreenRoomEast;