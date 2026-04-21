import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import './MainNorth.styles.scss';

const MainNorth = () => {
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
      <div className="main-room-north-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section north-column-1">
          <div className="border-shadow-sm sub-section-1-1">
            <img 
              src={directory[15].thumbnail}
                onClick={() => handleOpen(directory[15].src, directory[15].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img
             src={directory[16].thumbnail}
              onClick={() => handleOpen(directory[16].src, directory[16].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[17].thumbnail}
              onClick={() => handleOpen(directory[17].src, directory[17].title)}            
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[18].thumbnail}
              onClick={() => handleOpen(directory[18].src, directory[18].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[19].thumbnail}
              onClick={() => handleOpen(directory[19].src, directory[19].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section north-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[20].thumbnail}
              onClick={() => handleOpen(directory[20].src, directory[20].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[21].thumbnail}
              onClick={() => handleOpen(directory[21].src, directory[21].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
              <img 
                src={directory[22].thumbnail}
                onClick={() => handleOpen(directory[22].src, directory[22].title)}
              />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[23].thumbnail}
              onClick={() => handleOpen(directory[23].src, directory[23].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-2-5">
            <img 
              src={directory[24].thumbnail}
              onClick={() => handleOpen(directory[24].src, directory[24].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section north-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[25].thumbnail}
              onClick={() => handleOpen(directory[25].src, directory[25].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[26].thumbnail}
              onClick={() => handleOpen(directory[26].src, directory[26].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[27].thumbnail}
              onClick={() => handleOpen(directory[27].src, directory[27].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[28].thumbnail}
              onClick={() => handleOpen(directory[28].src, directory[28].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-5">
            <img 
              src={directory[29].thumbnail}
              onClick={() => handleOpen(directory[29].src, directory[29].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-6">
            <img 
              src={directory[30].thumbnail}
              onClick={() => handleOpen(directory[30].src, directory[30].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-7">
            <img 
              src={directory[31].thumbnail}
              onClick={() => handleOpen(directory[31].src, directory[31].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-8">
            <img 
              src={directory[32].thumbnail}
              onClick={() => handleOpen(directory[32].src, directory[32].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-3-9">
            <img 
              src={directory[33].thumbnail}
              onClick={() => handleOpen(directory[33].src, directory[33].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section north-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[34].thumbnail}
              onClick={() => handleOpen(directory[34].src, directory[34].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[35].thumbnail}
              onClick={() => handleOpen(directory[35].src, directory[35].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[36].thumbnail}
              onClick={() => handleOpen(directory[36].src, directory[36].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section north-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[37].thumbnail}
              onClick={() => handleOpen(directory[37].src, directory[37].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-2">
            <img 
              src={directory[38].thumbnail}
              onClick={() => handleOpen(directory[38].src, directory[38].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-3">
            <img 
              src={directory[39].thumbnail}
              onClick={() => handleOpen(directory[39].src, directory[39].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-4">
            <img 
              src={directory[40].thumbnail}
              onClick={() => handleOpen(directory[40].src, directory[40].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-5">
            <img 
              src={directory[41].thumbnail}
              onClick={() => handleOpen(directory[41].src, directory[41].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-5-6">
            <img 
              src={directory[42].thumbnail}
              onClick={() => handleOpen(directory[42].src, directory[42].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-5-7">
            <img 
              src={directory[43].thumbnail}
              onClick={() => handleOpen(directory[43].src, directory[43].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 6 ----------------- // */}

        <div className="section north-column-6">
          <div className="border-shadow-lg sub-section-6-1">
            <img 
              src={directory[44].thumbnail}
              onClick={() => handleOpen(directory[44].src, directory[44].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-6-2">
            <img 
              src={directory[45].thumbnail}
              onClick={() => handleOpen(directory[45].src, directory[45].title)}
            />
          </div>
          <div className="border-shadow-lg sub-section-6-3">
            <img 
              src={directory[46].thumbnail}
              onClick={() => handleOpen(directory[46].src, directory[46].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 7 ----------------- // */}

        <div className="section north-column-7">
          <div className="border-shadow-sm sub-section-7-1">
            <img 
              src={directory[47].thumbnail}
              onClick={() => handleOpen(directory[47].src, directory[47].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-2">
            <img 
              src={directory[48].thumbnail}
              onClick={() => handleOpen(directory[48].src, directory[48].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-3">
            <img 
              src={directory[49].thumbnail}
              onClick={() => handleOpen(directory[49].src, directory[49].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-4">
            <img 
              src={directory[50].thumbnail}
              onClick={() => handleOpen(directory[50].src, directory[50].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-5">
            <img 
              src={directory[51].thumbnail}
              onClick={() => handleOpen(directory[51].src, directory[51].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-6">
            <img 
              src={directory[52].thumbnail}
              onClick={() => handleOpen(directory[52].src, directory[52].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-7">
            <img 
              src={directory[53].thumbnail}
              onClick={() => handleOpen(directory[53].src, directory[53].title)}
            />
          </div>
        </div>

        {/* // ---------------- Column 8 ----------------- // */}

        <div className="section north-column-8">
          <div className="border-shadow-sm sub-section-8-1">
            <img 
              src={directory[54].thumbnail}
              onClick={() => handleOpen(directory[54].src, directory[54].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-2">
            <img 
              src={directory[55].thumbnail}
              onClick={() => handleOpen(directory[55].src, directory[55].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-3">
            <img 
              src={directory[56].thumbnail}
              onClick={() => handleOpen(directory[56].src, directory[56].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-4">
            <img 
              src={directory[57].thumbnail}
              onClick={() => handleOpen(directory[57].src, directory[57].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-5">
            <img 
              src={directory[58].thumbnail}
              onClick={() => handleOpen(directory[58].src, directory[58].title)}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-6">
            <img 
              src={directory[59].thumbnail}
              onClick={() => handleOpen(directory[59].src, directory[59].title)}
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

export default MainNorth;