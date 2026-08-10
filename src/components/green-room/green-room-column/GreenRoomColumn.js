import { useState } from 'react';
import { directory } from '../../../pages/directory/directory';
import ImageModal from '../../../pages/image-modal/ImageModal';
import './GreenRoomColumn.styles.scss';

const GreenRoomColumn = () => {
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
    <div className="green-room-column-container">
      <div className="green-room-column-grid">

      {/* ---------------------- Column 1 ------------------------ */}

      <div className="section green-room-column-column-1">
        <div className="exit-door-container">
          <div className="white-door-frame">
            <div className="white-door"></div>
          </div>
        </div>
        <div className="border-shadow-lg sub-section-1-1">
          <div className="window-frame">
            <div className="window-pane pane-right top"></div>
          </div>
        </div>
        <div className="border-shadow-sm sub-section-1-2">
          <img 
            src={directory[187].imgSrc}
            alt={directory[187].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-3">
          <img 
            src={directory[188].imgSrc}
            alt={directory[188].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-4">
          <img 
            src={directory[189].imgSrc}
            alt={directory[189].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-5">
          <img 
            src={directory[190].imgSrc}
            alt={directory[190].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-6">
          <img 
            src={directory[191].imgSrc}
            alt={directory[191].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-7">
          <img 
            src={directory[192].imgSrc}
            alt={directory[192].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-1-8">
          <img 
            src={directory[193].imgSrc}
            alt={directory[193].title}
          />
        </div>
      </div>

      {/* ---------------------- Column 2 ------------------------ */}

      <div className="section green-room-column-column-2">
        <div className="border-shadow-sm sub-section-2-1">
          <img 
            src={directory[225].imgSrc} 
            onClick={() => handleOpen(directory[225].imgSrc, directory[225].title)}
            alt={directory[225].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-2">
          <img 
            src={directory[226].imgSrc} 
            onClick={() => handleOpen(directory[226].imgSrc, directory[226].title)}
            alt={directory[226].title}
          />
        </div>
        <div className="border-shadow-sm sub-section-2-3">
          <img 
            src={directory[227].imgSrc} 
            onClick={() => handleOpen(directory[227].imgSrc, directory[227].title)}
            alt={directory[227].title}
          />
        </div>
      </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section green-room-column-column-3">
          <div className="border-shadow-sm sub-section-3-1">
            <img 
              src={directory[228].imgSrc} 
              onClick={() => handleOpen(directory[228].imgSrc, directory[228].title)}
              alt={directory[228].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[229].imgSrc} 
              onClick={() => handleOpen(directory[229].imgSrc, directory[229].title)}
              alt={directory[229].title}
            />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section green-room-column-column-4">
          <div className="exit-door-container">
            <div className="white-door-frame">
              <div className="white-door"></div>
            </div>
          </div>
          <div className="border-shadow-lg sub-section-4-1">
          <div className="window-frame">
            <div className="window-pane pane-right top"></div>
            <div className="window-pane pane-right bottom"></div>
          </div>
        </div>
          <div className="border-shadow-sm sub-section-4-2">
            <img 
              src={directory[211].imgSrc}
              alt={directory[211].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-3">
            <img 
              src={directory[212].imgSrc}
              alt={directory[212].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[213].imgSrc}
              alt={directory[213].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[210].imgSrc}
              alt={directory[210].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-6">
            <img 
              src={directory[209].imgSrc}
              alt={directory[209].title}
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

export default GreenRoomColumn;