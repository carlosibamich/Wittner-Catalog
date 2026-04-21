import { directory } from '../../../pages/directory/directory';
// import ImageModal from '../../../pages/image-modal/ImageModal';
import './MainWest.styles.scss';

const MainWest = () => {
 return (
    <div className="main-room-container">
      <div className="main-room-west-grid">

        {/* ---------------------- Column 1 ------------------------ */}

        <div className="section west-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img src={directory[136].thumbnail} />
          </div>
        </div>

        {/* ---------------------- Column 2 ------------------------ */}

        <div className="section west-column-2">
          <div className="border-shadow-lg sub-section-2-1">
            <img src={directory[137].thumbnail} />
          </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section west-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img src={directory[138].thumbnail} />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section west-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img src={directory[139].thumbnail} />
          </div>
        </div>
      
        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section west-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img src={directory[140].thumbnail} />  
          </div>
        </div>
      </div>
    </div>
 );
};

export default MainWest;