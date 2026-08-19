import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './AlcoveWest.styles.scss';

const AlcoveWest = () => {
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
    <div className="alcove-west-container">
      <div className="alcove-west-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section alcove-west-column-1">
          <div className="sub-section-1-1">
            <img 
              src={directory[81].thumbSrc}
              loading="lazy"
            />
          </div>
          <div className="alcove-exit-container">
            <div className="alcove-exit">
              <div className="sub-section-1-2">
                <img 
                  src={directory[96].thumbSrc}
                  loading="lazy"
                />
              </div>
              <div className="sub-section-1-3">
                <img 
                  src={directory[97].thumbSrc} 
                />
              </div>
              <div className="sub-section-1-4">
                <img 
                  src={directory[98].thumbSrc}
                />
              </div>
              <div className="sub-section-1-5">
                <img 
                  src={directory[99].thumbSrc}
                />
              </div>
              <div className="sub-section-1-6">
                <img 
                  src={directory[100].thumbSrc} 
                />
              </div>
              <div className="sub-section-1-7">
                <img 
                  src={directory[101].thumbSrc} 
                />
              </div>
              <div className="sub-section-1-8">
                <img 
                  src={directory[102].thumbSrc}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section alcove-west-column-2">
          <div className="border-shadow sub-section-2-1">
            <img 
              src={directory[82].thumbSrc}
              onClick={() => handleOpen(directory[82].imgSrc, directory[82].title)}
              alt={directory[82].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-2-2">
            <img
              src={directory[83].thumbSrc}
              onClick={() => handleOpen(directory[83].imgSrc, directory[83].title)}
              alt={directory[83].title}
            />
          </div>
          <div className="border-shadow sub-section-2-3">
            <img
              src={directory[84].thumbSrc}   
              onClick={() => handleOpen(directory[84].imgSrc, directory[84].title)}
              alt={directory[84].title}
            />
          </div>
          <div className="border-shadow sub-section-2-4">
            <img 
              src={directory[85].thumbSrc}
              onClick={() => handleOpen(directory[85].imgSrc, directory[85].title)}
              alt={directory[85].title}
            />
          </div>
          <div className="border-shadow sub-section-2-5">
            <img 
              src={directory[86].thumbSrc}
              onClick={() => handleOpen(directory[86].imgSrc, directory[86].title)}
              alt={directory[86].title}
            />
          </div>
          <div className="border-shadow sub-section-2-6">
            <img 
              src={directory[87].thumbSrc}
              onClick={() => handleOpen(directory[87].imgSrc, directory[87].title)}
              alt={directory[87].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section alcove-west-column-3">
          <div className="sub-section-3-1">
            <img 
              src={directory[65].thumbSrc}
              loading="lazy"
            />
          </div>
          <div className="sub-section-3-2">
            <img 
              src={directory[66].thumbSrc}
            />
          </div>
          <div className="sub-section-3-3">
            <img
              src={directory[67].thumbSrc}
            />
          </div>
          <div className="sub-section-3-4">
            <img 
              src={directory[68].thumbSrc}
            />
          </div>
          <div className="sub-section-3-5">
            <img 
              src={directory[69].thumbSrc}
            />
          </div>
          <div className="sub-section-3-6">
            <img 
              src={directory[70].thumbSrc}
            />
          </div>
          <div className="sub-section-3-7">
            <img 
              src={directory[71].thumbSrc}
            />
          </div>
          <div className="sub-section-3-8">
            <img 
              src={directory[72].thumbSrc}
            />
          </div>
          <div className="sub-section-3-9">
            <img 
              src={directory[73].thumbSrc}
            />
          </div>
          <div className="sub-section-3-10">
            <img 
              src={directory[74].thumbSrc}
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

export default AlcoveWest;