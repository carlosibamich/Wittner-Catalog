import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './MainSouth.styles.scss';

const MainSouth = () => {
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
      <div className="main-room-south-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section south-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[104].thumbnail} 
              onClick={() => handleOpen(directory[104].src, directory[104].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-1-2">
            <img 
              src={directory[105].thumbnail}
              onClick={() => handleOpen(directory[105].src, directory[105].title)} 
            />
          </div>
          {/* <div className="basement-entrance">
            
          </div> */}
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section south-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[106].thumbnail}
              onClick={() => handleOpen(directory[106].src, directory[106].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-2-2">
            <img 
              src={directory[107].thumbnail}
              onClick={() => handleOpen(directory[107].src, directory[107].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
              <img 
                src={directory[108].thumbnail} 
                onClick={() => handleOpen(directory[108].src, directory[108].title)}
              />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[109].thumbnail}
              onClick={() => handleOpen(directory[109].src, directory[109].title)}
             />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[110].thumbnail}
              onClick={() => handleOpen(directory[110].src, directory[110].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-2-6">
            <img 
              src={directory[111].thumbnail}
              onClick={() => handleOpen(directory[111].src, directory[111].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section south-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[112].thumbnail} 
              onClick={() => handleOpen(directory[112].src, directory[112].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[113].thumbnail}
              onClick={() => handleOpen(directory[113].src, directory[113].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
              <img 
                src={directory[114].thumbnail}
                onClick={() => handleOpen(directory[114].src, directory[114].title)} 
              />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[115].thumbnail}
              onClick={() => handleOpen(directory[115].src, directory[115].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-3-5">
            <img 
              src={directory[116].thumbnail}
              onClick={() => handleOpen(directory[116].src, directory[116].title)} 
             />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section south-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[117].thumbnail}
              onClick={() => handleOpen(directory[117].src, directory[117].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[118].thumbnail}
              onClick={() => handleOpen(directory[118].src, directory[118].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[119].thumbnail}
              onClick={() => handleOpen(directory[119].src, directory[119].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section south-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[120].thumbnail}
              onClick={() => handleOpen(directory[120].src, directory[120].title)} 
            />            
          </div>
          <div className="border-shadow-lg sub-section-5-2">
            <img 
              src={directory[121].thumbnail}
              onClick={() => handleOpen(directory[121].src, directory[121].title)} 
            />           
          </div>
          <div className="border-shadow-lg sub-section-5-3">
            <img 
              src={directory[122].thumbnail}
              onClick={() => handleOpen(directory[122].src, directory[122].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-4">
            <img 
              src={directory[123].thumbnail}
              onClick={() => handleOpen(directory[123].src, directory[123].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-5">
            <img 
              src={directory[124].thumbnail}
              onClick={() => handleOpen(directory[124].src, directory[124].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-6">
            <img
              src={directory[125].thumbnail} 
              onClick={() => handleOpen(directory[125].src, directory[125].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-7">
            <img
              src={directory[126].thumbnail} 
              onClick={() => handleOpen(directory[126].src, directory[126].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-8">
            <img
              src={directory[127].thumbnail} 
              onClick={() => handleOpen(directory[127].src, directory[127].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-9">
            <img
              src={directory[128].thumbnail} 
              onClick={() => handleOpen(directory[128].src, directory[128].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-10">
            <img
              src={directory[129].thumbnail} 
              onClick={() => handleOpen(directory[129].src, directory[129].title)} 
            />           
          </div>
          <div className="border-shadow-sm sub-section-5-11">
            <img
              src={directory[130].thumbnail} 
              onClick={() => handleOpen(directory[130].src, directory[130].title)} 
            />           
          </div>
          <div className="border-shadow-sm sub-section-5-12">
            <img
              src={directory[131].thumbnail} 
              onClick={() => handleOpen(directory[131].src, directory[131].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-13">
            <img
              src={directory[132].thumbnail} 
              onClick={() => handleOpen(directory[132].src, directory[132].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-14">
            <img 
              src={directory[133].thumbnail} 
              onClick={() => handleOpen(directory[133].src, directory[133].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 6 ----------------- // */}

        <div className="section south-column-6">
          <div className="border-shadow-lg sub-section-6-1">
            <img 
              src={directory[134].thumbnail} 
              onClick={() => handleOpen(directory[134].src, directory[134].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-6-2">
            <img 
              src={directory[135].thumbnail} 
              onClick={() => handleOpen(directory[135].src, directory[135].title)} 
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

export default MainSouth;