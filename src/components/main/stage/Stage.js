import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './Stage.styles.scss';

const StageEast = () => {
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
    <div className="main-room-stage-container">
      <div className="main-room-stage-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section stage-column-1">
          <div className="past-behind-container">
            <div className="border-shadow-lg sub-section-1-1">
              <img 
                src={directory[88].imgSrc} 
                onClick={() => handleOpen(directory[88].imgSrc, directory[88].title)}
                loading="lazy"
              />
            </div>
          </div>
          <div className="north-exit-container">
            <div className="inset">
              <div className="border-shadow-lg sub-section-1-2">
                <img 
                  src={directory[61].imgSrc} 
                  loading="lazy"
                />
              </div>
              <div className="border-shadow-lg sub-section-1-3">
                <img src={directory[62].imgSrc} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stage-column-2">
          <div className="border-shadow-sm sub-section-2-1">
            <img 
              src={directory[89].imgSrc}
              onClick={() => handleOpen(directory[89].imgSrc, directory[89].title)}
            />          
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[90].imgSrc} 
              onClick={() => handleOpen(directory[90].imgSrc, directory[90].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img 
              src={directory[91].imgSrc} 
              onClick={() => handleOpen(directory[91].imgSrc, directory[91].title)}
            />         
          </div>
          <div className="border-shadow-lg sub-section-2-4">
            <img 
              src={directory[92].imgSrc} 
              onClick={() => handleOpen(directory[92].imgSrc, directory[92].title)}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-lg sub-section-2-5">
            <img 
              src={directory[93].imgSrc} 
              onClick={() => handleOpen(directory[93].imgSrc, directory[93].title)}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-lg sub-section-2-6">
            <img 
              src={directory[94].imgSrc} 
              onClick={() => handleOpen(directory[94].imgSrc, directory[94].title)}
              loading="lazy"
            />
          </div>
          <div className="alcove-entrance-container">
            <div className="alcove-entrance">
              <div className="border-shadow-lg sub-section-2-7">
                <img 
                  src={directory[65].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-8">
                <img 
                  src={directory[66].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-9">
                <img 
                  src={directory[67].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-10">
                <img 
                  src={directory[68].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-11">
                <img 
                  src={directory[69].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-12">
                <img 
                  src={directory[71].imgSrc} 
                />
              </div>
              <div className="border-shadow-sm sub-section-2-13">
                <img 
                  src={directory[70].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-14">
                <img 
                  src={directory[72].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-15">
                <img 
                  src={directory[73].imgSrc}
                />
              </div>
              <div className="border-shadow-sm sub-section-2-16">
                <img 
                  src={directory[74].imgSrc}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stage-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[95].imgSrc} 
              onClick={() => handleOpen(directory[95].imgSrc, directory[95].title)}
              loading="lazy"
            />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stage-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img
              src={directory[96].imgSrc} 
              onClick={() => handleOpen(directory[96].imgSrc, directory[96].title)}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[97].imgSrc} 
              onClick={() => handleOpen(directory[97].imgSrc, directory[97].title)}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[98].imgSrc} 
              onClick={() => handleOpen(directory[98].imgSrc, directory[98].title)}
              loading="lazy"
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[99].imgSrc} 
              onClick={() => handleOpen(directory[99].imgSrc, directory[99].title)}
            /> 
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[100].imgSrc} 
              onClick={() => handleOpen(directory[100].imgSrc, directory[100].title)}
            />          
          </div>
          <div className="border-shadow-sm sub-section-4-6">
            <img 
              src={directory[101].imgSrc} 
              onClick={() => handleOpen(directory[101].imgSrc, directory[101].title)}
            />           
          </div>
          <div className="border-shadow-sm sub-section-4-7">
            <img 
              src={directory[102].imgSrc} 
              onClick={() => handleOpen(directory[102].imgSrc, directory[102].title)}
            />            
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section stage-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[103].imgSrc} 
              onClick={() => handleOpen(directory[103].imgSrc, directory[103].title)}
              loading="lazy"
            />
          </div>
          {/* <div className="stairs-door"></div> */}
          <div className="border-shadow-lg sub-section-5-2">
            <img 
              src={directory[104].imgSrc} 
              onClick={() => handleOpen(directory[104].imgSrc, directory[104].title)}
              loading="lazy"
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

export default StageEast;