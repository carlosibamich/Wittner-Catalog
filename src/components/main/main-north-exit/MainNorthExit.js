import { directory } from '../../../pages/directory/directory';
import './MainNorthExit.styles.scss';

const MainNorthExit = () => {
  return (
    <div className="main-room-container">
      <div className="main-room-north-exit-grid">

        {/* ---------------------- Column 1 ------------------------ */}

        <div className="section north-exit-column-1">
          <div className="border-shadow-lg sub-section-1-1">
            <img src={directory[54].thumbnail} />
          </div>
          <div className="border-shadow-sm sub-section-1-2">
            <img src={directory[55].thumbnail} />
          </div>
          <div className="border-shadow-sm sub-section-1-3">
            <img src={directory[56].thumbnail} />
          </div>
          <div className="border-shadow-lg sub-section-1-4">
            <img src={directory[57].thumbnail} />
          </div>
          <div className="border-shadow-sm sub-section-1-5">
            <img src={directory[58].thumbnail} />
          </div>
          <div className="border-shadow-sm sub-section-1-6">
            <img src={directory[59].thumbnail} />
          </div>
          <div className="border-shadow-sm sub-section-1-7">
            <img src={directory[60].thumbnail} />
          </div>
        </div>

        {/* ---------------------- Column 2 ------------------------ */}

        <div className="section north-exit-column-2">
          <div className="exit-door-container">
            <div className="exit-sign">EXIT</div>
            <div className="exit-door-frame"></div>
          </div>
        </div>

        {/* ---------------------- Column 3 ------------------------ */}

        <div className="section north-exit-column-3">
          <div className="border-shadow-lg sub-section-3-1">
            <img src={directory[61].thumbnail} />
          </div>
          <div className="border-shadow-lg sub-section-3-2">
            <img src={directory[62].thumbnail} />
          </div>
        </div>

        {/* ---------------------- Column 4 ------------------------ */}

        <div className="section north-exit-column-4">
          <div className="border-shadow-lg sub-section-4-1">
            <img src={directory[63].thumbnail} />
          </div>
          <div className="border-shadow-lg sub-section-4-2">
            <img src={directory[64].thumbnail} />  
          </div>
        </div>
      
        {/* ---------------------- Column 5 ------------------------ */}

        <div className="section north-exit-column-5">
          <div className="border-shadow-sm sub-section-5-1">
            <img src={directory[89].thumbnail} />  
          </div>
          <div className="border-shadow-sm sub-section-5-2">
            <img src={directory[90].thumbnail} /> 
          </div>
          <div className="border-shadow-sm sub-section-5-3">
            <img src={directory[91].thumbnail} />
          </div>
          <div className="border-shadow-lg sub-section-5-4">
            <img src={directory[92].thumbnail} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainNorthExit;