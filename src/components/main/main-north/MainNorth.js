import { useState } from 'react';
import ImageModal from '../../../pages/image-modal/ImageModal';
import { directory } from '../../../pages/directory/directory';
import Footer from '../../footer/Footer'; 
import './MainNorth.styles.scss';

const MainNorth = () => {
  const [ showModal, setShowModal] = useState(false);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [ selectedTitle, setSelectedTitle ] = useState(null);
  const [ selectedAudio, setSelectedAudio ] = useState(null);

  const handleOpen = (imgUrl, title, audio) => {
    setSelectedImg(imgUrl);
    setSelectedTitle(title);
    setSelectedAudio(audio);
    setShowModal(true);
  }

  const handleClose = () => setShowModal(false);

  return (
    <div className="main-room-north-container">
      <div className="main-room-north-grid">

        {/* // ---------------- Column 1 ----------------- // */}

        <div className="section north-column-1">
          <div className="border-shadow-sm sub-section-1-1">
            <img 
              src={directory[15].imgSrc}
              onClick={() => handleOpen(directory[15].imgSrc, directory[15].title)}
              alt={directory[15].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img
              src={directory[16].imgSrc}
              onClick={() => handleOpen(directory[16].imgSrc, directory[16].title)}
              alt={directory[16].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img
              src={directory[17].imgSrc}
              onClick={() => handleOpen(directory[17].imgSrc, directory[17].title)} 
              alt={directory[17].title}           
            />
          </div>
          <div className="border-shadow-sm sub-section-1-4">
            <img 
              src={directory[18].imgSrc}
              onClick={() => handleOpen(directory[18].imgSrc, directory[18].title)}
              alt={directory[18].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img 
              src={directory[19].imgSrc}
              onClick={() => handleOpen(directory[19].imgSrc, directory[19].title)}
              alt={directory[19].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 2 ----------------- // */}

        <div className="section north-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img 
              src={directory[20].imgSrc}
              onClick={() => handleOpen(directory[20].imgSrc, directory[20].title)}
              alt={directory[20].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-2">
            <img 
              src={directory[21].imgSrc}
              onClick={() => handleOpen(directory[21].imgSrc, directory[21].title)}
              alt={directory[21].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-2-3">
              <img 
                src={directory[22].imgSrc}
                onClick={() => handleOpen(directory[22].imgSrc, directory[22].title)}
                alt={directory[22].title}
              />
          </div>
          <div className="border-shadow-sm sub-section-2-4">
            <img 
              src={directory[23].imgSrc}
              onClick={() => handleOpen(directory[23].imgSrc, directory[23].title)}
              alt={directory[23].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-2-5">
            <img 
              src={directory[24].imgSrc}
              onClick={() => handleOpen(directory[24].imgSrc, directory[24].title)}
              alt={directory[24].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 3 ----------------- // */}

        <div className="section north-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img 
              src={directory[25].imgSrc}
              onClick={() => handleOpen(directory[25].imgSrc, directory[25].title)}
              alt={directory[25].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-2">
            <img 
              src={directory[26].imgSrc}
              onClick={() => handleOpen(directory[26].imgSrc, directory[26].title)}
              alt={directory[26].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-3">
            <img
              src={directory[27].imgSrc}
              onClick={() => handleOpen(directory[27].imgSrc, directory[27].title)}
              alt={directory[27].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-4">
            <img 
              src={directory[28].imgSrc}
              onClick={() => handleOpen(directory[28].imgSrc, directory[28].title)}
              alt={directory[28].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-5">
            <img 
              src={directory[29].imgSrc}
              onClick={() => handleOpen(directory[29].imgSrc, directory[29].title)}
              alt={directory[29].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-6">
            <img 
              src={directory[30].imgSrc}
              onClick={() => handleOpen(directory[30].imgSrc, directory[30].title)}
              alt={directory[30].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-7">
            <img 
              src={directory[31].imgSrc}
              onClick={() => handleOpen(directory[31].imgSrc, directory[31].title)}
              alt={directory[31].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-3-8">
            <img 
              src={directory[32].imgSrc}
              onClick={() => handleOpen(directory[32].imgSrc, directory[32].title)}
              alt={directory[32].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-3-9">
            <img 
              src={directory[33].imgSrc}
              onClick={() => handleOpen(directory[33].imgSrc, directory[33].title)}
              alt={directory[33].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 4 ----------------- // */}

        <div className="section north-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img 
              src={directory[34].imgSrc}
              onClick={() => handleOpen(directory[34].imgSrc, directory[34].title)}
              alt={directory[34].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img 
              src={directory[35].imgSrc}
              onClick={() => handleOpen(directory[35].imgSrc, directory[35].title)}
              alt={directory[35].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-4-3">
            <img 
              src={directory[36].imgSrc}
              onClick={() => handleOpen(directory[36].imgSrc, directory[36].title)}
              alt={directory[36].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 5 ----------------- // */}

        <div className="section north-column-5">
          <div className="border-shadow-lg sub-section-5-1">
            <img 
              src={directory[37].imgSrc}
              onClick={() => handleOpen(directory[37].imgSrc, directory[37].title)}
              alt={directory[37].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-2">
            <img 
              src={directory[38].imgSrc}
              onClick={() => handleOpen(directory[38].imgSrc, directory[38].title)}
              alt={directory[38].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-3">
            <img 
              src={directory[39].imgSrc}
              onClick={() => handleOpen(directory[39].imgSrc, directory[39].title)}
              alt={directory[39].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-4">
            <img 
              src={directory[40].imgSrc}
              onClick={() => handleOpen(directory[40].imgSrc, directory[40].title)}
              alt={directory[40].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-5-5">
            <img 
              src={directory[41].imgSrc}
              onClick={() => handleOpen(directory[41].imgSrc, directory[41].title)}
              alt={directory[41].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-5-6">
            <img 
              src={directory[42].imgSrc}
              onClick={() => handleOpen(directory[42].imgSrc, directory[42].title)}
              alt={directory[42].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-5-7">
            <img 
              src={directory[43].imgSrc}
              onClick={() => handleOpen(directory[43].imgSrc, directory[43].title)}
              alt={directory[43].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 6 ----------------- // */}

        <div className="section north-column-6">
          <div className="border-shadow-lg sub-section-6-1">
            <img 
              src={directory[44].imgSrc}
              onClick={() => handleOpen(directory[44].imgSrc, directory[44].title)}
              alt={directory[44].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-6-2">
            <img 
              src={directory[45].imgSrc}
              onClick={() => handleOpen(directory[45].imgSrc, directory[45].title)}
              alt={directory[45].title}
            />
          </div>
          <div className="border-shadow-lg sub-section-6-3">
            <img 
              src={directory[46].imgSrc}
              onClick={() => handleOpen(directory[46].imgSrc, directory[46].title)}
              alt={directory[46].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 7 ----------------- // */}

        <div className="section north-column-7">
          <div className="border-shadow-sm sub-section-7-1">
            <img 
              src={directory[47].imgSrc}
              onClick={() => handleOpen(directory[47].imgSrc, directory[47].title)}
              alt={directory[47].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-2">
            <img 
              src={directory[48].imgSrc}
              onClick={() => handleOpen(directory[48].imgSrc, directory[48].title)}
              alt={directory[48].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-3">
            <img 
              src={directory[49].imgSrc}
              onClick={() => handleOpen(directory[49].imgSrc, directory[49].title)}
              alt={directory[49].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-4">
            <img 
              src={directory[50].imgSrc}
              onClick={() => handleOpen(directory[50].imgSrc, directory[50].title)}
              alt={directory[50].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-5">
            <img 
              src={directory[51].imgSrc}
              onClick={() => handleOpen(directory[51].imgSrc, directory[51].title)}
              alt={directory[51].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-6">
            <img 
              src={directory[52].imgSrc}
              onClick={() => handleOpen(directory[52].imgSrc, directory[52].title)}
              alt={directory[52].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-7-7">
            <img 
              src={directory[53].imgSrc}
              onClick={() => handleOpen(directory[53].imgSrc, directory[53].title)}
              alt={directory[53].title}
            />
          </div>
        </div>

        {/* // ---------------- Column 8 ----------------- // */}

        <div className="section north-column-8">
          <div className="border-shadow-sm sub-section-8-1">
            <img 
              src={directory[54].imgSrc}
              onClick={() => handleOpen(directory[54].imgSrc, directory[54].title)}
              alt={directory[54].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-2">
            <img 
              src={directory[55].imgSrc}
              onClick={() => handleOpen(directory[55].imgSrc, directory[55].title)}
              alt={directory[55].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-3">
            <img 
              src={directory[56].imgSrc}
              onClick={() => handleOpen(directory[56].imgSrc, directory[56].title)}
              alt={directory[56].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-4">
            <img 
              src={directory[57].imgSrc}
              onClick={() => handleOpen(directory[57].imgSrc, directory[57].title)}
              alt={directory[57].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-5">
            <img 
              src={directory[58].imgSrc}
              onClick={() => handleOpen(directory[58].imgSrc, directory[58].title)}
              alt={directory[58].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-6">
            <img 
              src={directory[59].imgSrc}
              onClick={() => handleOpen(directory[59].imgSrc, directory[59].title)}
              alt={directory[59].title}
            />
          </div>
          <div className="border-shadow-sm sub-section-8-7">
            <img 
              src={directory[60].imgSrc}
              onClick={() => handleOpen(directory[60].imgSrc, directory[60].title)}
              alt={directory[60].title}
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