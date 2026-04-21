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
    <div className="main-room-container">
      <div className="platform-container">
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
      </div>
      <div className="main-room-stage-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section west-column-1">
          <div className="past-behind-container">
            <div className="border-shadow-lg sub-section-1-1">
              <img 
                src={directory[88].thumbnail} 
                onClick={() => handleOpen(directory[88].src, directory[88].title)}
              />
            </div>
          </div>
          <div className="north-exit-inset">
            <div className="border-shadow-sm sub-section-1-2">
              <img 
                src={directory[61].thumbnail} />
            </div>
            <div className="border-shadow-sm sub-section-1-3">
              <img src={directory[62].thumbnail} />
            </div>
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section stage-column-2">
          <div className="border-shadow-sm sub-section-2-1">
            <img 
              src={directory[89].thumbnail}
              onClick={() => handleOpen(directory[89].src, directory[89].title)}
            />          
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[90].thumbnail} 
              onClick={() => handleOpen(directory[90].src, directory[90].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
            <img 
              src={directory[91].thumbnail} 
              onClick={() => handleOpen(directory[91].src, directory[91].title)}
            />         
          </div>
          <div className="border-shadow-lg sub-section-2-4">
            <img 
              src={directory[92].thumbnail} 
              onClick={() => handleOpen(directory[92].src, directory[92].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-2-5">
            <img 
              src={directory[93].thumbnail} 
              onClick={() => handleOpen(directory[93].src, directory[93].title)}
            />
          </div>
          <div className="storage-entrance-container">
            <div className="storage-entrance">
              <div className="border-shadow-lg sub-section-2-6">
                <img src={directory[65].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-7">
                <img src={directory[66].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-8">
                <img src={directory[67].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-9">
                <img src={directory[68].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-10">
                <img src={directory[69].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-11">
                <img src={directory[71].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-12">
                <img src={directory[70].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-13">
                <img src={directory[72].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-14">
                <img src={directory[73].thumbnail} />
              </div>
              <div className="border-shadow-sm sub-section-2-15">
                <img src={directory[74].thumbnail} />
              </div>
            </div>
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section stage-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[94].thumbnail} 
              onClick={() => handleOpen(directory[94].src, directory[94].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section stage-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img
               src={directory[95].thumbnail} 
              onClick={() => handleOpen(directory[95].src, directory[95].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[96].thumbnail} 
              onClick={() => handleOpen(directory[96].src, directory[96].title)}
            />
          </div>
          <div className="stage-door"></div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[97].thumbnail} 
              onClick={() => handleOpen(directory[97].src, directory[97].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-4-4">
            <img 
              src={directory[98].thumbnail} 
              onClick={() => handleOpen(directory[98].src, directory[98].title)}
            /> 
          </div>
          <div className="border-shadow-sm sub-section-4-5">
            <img 
              src={directory[99].thumbnail} 
              onClick={() => handleOpen(directory[99].src, directory[99].title)}
            />          
          </div>
          <div className="border-shadow-sm sub-section-4-6">
            <img 
              src={directory[100].thumbnail} 
              onClick={() => handleOpen(directory[100].src, directory[100].title)}
            />           
          </div>
          <div className="border-shadow-sm sub-section-4-7">
            <img 
              src={directory[101].thumbnail} 
              onClick={() => handleOpen(directory[101].src, directory[101].title)}
            />            
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section west-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[102].thumbnail} 
              onClick={() => handleOpen(directory[102].src, directory[102].title)}
            />
          </div>
          <div className="stairs-door"></div>
          <div className="border-shadow-lg sub-section-5-2">
            <img 
              src={directory[103].thumbnail} 
              onClick={() => handleOpen(directory[103].src, directory[103].title)}
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

export default StageEast;