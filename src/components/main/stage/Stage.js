import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './Stage.styles.scss';

const Stage = () => {
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
    <div className="main-room-stage-container">
      <div className="main-room-stage-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stage-column-1">
          <div className="past-behind-container">
            <div className="border-shadow sub-section-1-1">
              <img 
                src={directory[88].thumbSrc} 
                onClick={() => handleOpen(directory[88].imgSrc, directory[88].title)}
                alt={directory[88].title}
                loading="lazy"
              />
            </div>
          </div>
          <div className="north-exit-container">
            <div className="inset">
         
              <div className="sub-section-1-2">
                <img 
                  src={directory[61].thumbSrc} 
                  loading="lazy"
                />
              </div>
              <div className="sub-section-1-3">
                <img src={directory[62].thumbSrc} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stage-column-2">
          <div className="border-shadow sub-section-2-1">
            <img 
              src={directory[89].thumbSrc}
              onClick={() => handleOpen(directory[89].imgSrc, directory[89].title)}
              alt={directory[89].title}
            />          
          </div>
          <div className="border-shadow sub-section-2-2">
            <img 
              src={directory[90].thumbSrc} 
              onClick={() => handleOpen(directory[90].imgSrc, directory[90].title)}
              alt={directory[90].title}
            />
          </div>
          <div className="border-shadow sub-section-2-3">
            <img 
              src={directory[91].thumbSrc} 
              onClick={() => handleOpen(directory[91].imgSrc, directory[91].title)}
              alt={directory[91].title}
            />         
          </div>
          <div className="border-shadow sub-section-2-4">
            <img 
              src={directory[92].thumbSrc} 
              onClick={() => handleOpen(directory[92].imgSrc, directory[92].title)}
              alt={directory[92].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-2-5">
            <img 
              src={directory[93].thumbSrc} 
              onClick={() => handleOpen(directory[93].imgSrc, directory[93].title)}
              alt={directory[93].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-2-6">
            <img 
              src={directory[94].thumbSrc} 
              onClick={() => handleOpen(directory[94].imgSrc, directory[94].title)}
              alt={directory[94].title}
            />
          </div>
          <div className="alcove-entrance-container">
            <div className="alcove-entrance">
              <div className="sub-section-2-7">
                <img 
                  src={directory[65].thumbSrc}
                />
              </div>
              <div className="sub-section-2-8">
                <img 
                  src={directory[66].thumbSrc} 
                />
              </div>
              <div className="sub-section-2-9">
                <img 
                  src={directory[67].thumbSrc}
                />
              </div>
              <div className="sub-section-2-10">
                <img 
                  src={directory[68].thumbSrc}
                />
              </div>
              <div className="sub-section-2-11">
                <img 
                  src={directory[69].thumbSrc} 
                />
              </div>
              <div className="sub-section-2-12">
                <img 
                  src={directory[71].thumbSrc} 
                />
              </div>
              <div className="sub-section-2-13">
                <img 
                  src={directory[70].thumbSrc}
                />
              </div>
              <div className="sub-section-2-14">
                <img 
                  src={directory[72].thumbSrc}
                />
              </div>
              <div className="sub-section-2-15">
                <img 
                  src={directory[73].thumbSrc}
                />
              </div>
              <div className="sub-section-2-16">
                <img 
                  src={directory[74].thumbSrc}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stage-column-3">
          <div className="border-shadow sub-section-3-1">
            <img 
              src={directory[95].thumbSrc} 
              onClick={() => handleOpen(directory[95].imgSrc, directory[95].title)}
              alt={directory[95].title}
              loading="lazy"
            />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stage-column-4">
          <div className="border-shadow sub-section-4-1">
            <img
              src={directory[96].thumbSrc} 
              onClick={() => handleOpen(directory[96].imgSrc, directory[96].title)}
              alt={directory[96].title}
              loading="lazy"
            />
          </div>
          <div className="border-shadow sub-section-4-2">
            <img 
              src={directory[97].thumbSrc} 
              onClick={() => handleOpen(directory[97].imgSrc, directory[97].title)}
              alt={directory[97].title}
            />
          </div>
          <div className="border-shadow sub-section-4-3">
            <img 
              src={directory[98].thumbSrc} 
              onClick={() => handleOpen(directory[98].imgSrc, directory[98].title)}
              alt={directory[98].title}
            />
          </div>
          <div className="border-shadow sub-section-4-4">
            <img 
              src={directory[99].thumbSrc} 
              onClick={() => handleOpen(directory[99].imgSrc, directory[99].title)}
              alt={directory[99].title}
            /> 
          </div>
          <div className="border-shadow sub-section-4-5">
            <img 
              src={directory[100].thumbSrc} 
              onClick={() => handleOpen(directory[100].imgSrc, directory[100].title)}
              alt={directory[100].title}
            />          
          </div>
          <div className="border-shadow sub-section-4-6">
            <img 
              src={directory[101].thumbSrc} 
              onClick={() => handleOpen(directory[101].imgSrc, directory[101].title)}
              alt={directory[101].title}
            />           
          </div>
          <div className="border-shadow sub-section-4-7">
            <img 
              src={directory[102].thumbSrc} 
              onClick={() => handleOpen(directory[102].imgSrc, directory[102].title)}
              alt={directory[102].title}
            />            
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stage-column-5">
          <div className="border-shadow sub-section-5-1">
            <img 
              src={directory[103].thumbSrc} 
              onClick={() => handleOpen(directory[103].imgSrc, directory[103].title)}
              alt={directory[103].title}
            />
          </div>
          <div className="border-shadow sub-section-5-2">
            <img 
              src={directory[104].thumbSrc} 
              onClick={() => handleOpen(directory[104].imgSrc, directory[104].title)}
              alt={directory[104].title}
            />
          </div>
        </div>
        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stage-column-6">
          <div className="platform-container">
            <div className="step"></div>
            <div className="step"></div>
            <div className="step"></div>
            <div className="step"></div>
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

export default Stage;