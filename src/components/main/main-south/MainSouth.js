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
    <div className="main-room-south-container">
      <div className="main-room-south-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section south-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img 
              src={directory[105].imgSrc} 
              onClick={() => handleOpen(directory[105].imgSrc, directory[105].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-1-2">
            <img 
              src={directory[106].imgSrc}
              onClick={() => handleOpen(directory[106].imgSrc, directory[106].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section south-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[107].imgSrc}
              onClick={() => handleOpen(directory[107].imgSrc, directory[107].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-2-2">
            <img 
              src={directory[108].imgSrc}
              onClick={() => handleOpen(directory[108].imgSrc, directory[108].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
              <img 
                src={directory[109].imgSrc} 
                onClick={() => handleOpen(directory[109].imgSrc, directory[109].title)}
              />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[110].imgSrc}
              onClick={() => handleOpen(directory[110].imgSrc, directory[110].title)}
             />
          </div>
          <div className="border-shadow-sm sub-section-2-5">
            <img 
              src={directory[111].imgSrc}
              onClick={() => handleOpen(directory[111].imgSrc, directory[111].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-2-6">
            <img 
              src={directory[112].imgSrc}
              onClick={() => handleOpen(directory[112].imgSrc, directory[112].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section south-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[113].imgSrc} 
              onClick={() => handleOpen(directory[113].imgSrc, directory[113].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[114].imgSrc}
              onClick={() => handleOpen(directory[114].imgSrc, directory[114].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
              <img 
                src={directory[115].imgSrc}
                onClick={() => handleOpen(directory[115].imgSrc, directory[115].title)} 
              />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[116].imgSrc}
              onClick={() => handleOpen(directory[116].imgSrc, directory[116].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-3-5">
            <img 
              src={directory[117].imgSrc}
              onClick={() => handleOpen(directory[117].imgSrc, directory[117].title)} 
             />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section south-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[118].imgSrc}
              onClick={() => handleOpen(directory[118].imgSrc, directory[118].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[119].imgSrc}
              onClick={() => handleOpen(directory[119].imgSrc, directory[119].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[120].imgSrc}
              onClick={() => handleOpen(directory[120].imgSrc, directory[120].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section south-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[121].imgSrc}
              onClick={() => handleOpen(directory[121].imgSrc, directory[121].title)} 
            />            
          </div>
          <div className="border-shadow-lg sub-section-5-2">
            <img 
              src={directory[122].imgSrc}
              onClick={() => handleOpen(directory[122].imgSrc, directory[122].title)} 
            />           
          </div>
          <div className="border-shadow-lg sub-section-5-3">
            <img 
              src={directory[123].imgSrc}
              onClick={() => handleOpen(directory[123].imgSrc, directory[123].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-4">
            <img 
              src={directory[124].imgSrc}
              onClick={() => handleOpen(directory[124].imgSrc, directory[124].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-5">
            <img 
              src={directory[125].imgSrc}
              onClick={() => handleOpen(directory[125].imgSrc, directory[125].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-6">
            <img
              src={directory[126].imgSrc} 
              onClick={() => handleOpen(directory[126].imgSrc, directory[126].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-7">
            <img
              src={directory[127].imgSrc} 
              onClick={() => handleOpen(directory[127].imgSrc, directory[127].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-8">
            <img
              src={directory[128].imgSrc} 
              onClick={() => handleOpen(directory[128].imgSrc, directory[128].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-9">
            <img
              src={directory[129].imgSrc} 
              onClick={() => handleOpen(directory[129].imgSrc, directory[129].title)} 
            />
          </div>
          <div className="border-shadow-sm sub-section-5-10">
            <img
              src={directory[130].imgSrc} 
              onClick={() => handleOpen(directory[130].imgSrc, directory[130].title)} 
            />           
          </div>
          <div className="border-shadow-sm sub-section-5-11">
            <img
              src={directory[131].imgSrc} 
              onClick={() => handleOpen(directory[131].imgSrc, directory[131].title)} 
            />           
          </div>
          <div className="border-shadow-sm sub-section-5-12">
            <img
              src={directory[132].imgSrc} 
              onClick={() => handleOpen(directory[132].imgSrc, directory[132].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-13">
            <img
              src={directory[133].imgSrc} 
              onClick={() => handleOpen(directory[133].imgSrc, directory[133].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-5-14">
            <img 
              src={directory[134].imgSrc} 
              onClick={() => handleOpen(directory[134].imgSrc, directory[134].title)} 
            />
          </div>
        </div>

        {/* // ---------------- Column 6 ----------------- // */}

        <div className="section south-column-6">
          <div className="border-shadow-lg sub-section-6-1">
            <img 
              src={directory[135].imgSrc} 
              onClick={() => handleOpen(directory[135].imgSrc, directory[135].title)} 
            />
          </div>
          <div className="border-shadow-lg sub-section-6-2">
            <img 
              src={directory[136].imgSrc} 
              onClick={() => handleOpen(directory[136].imgSrc, directory[136].title)} 
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