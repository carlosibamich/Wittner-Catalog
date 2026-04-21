import { useLocation } from 'react-router-dom';
import { FaHammer } from 'react-icons/fa';
import './StairwellRoom.styles.scss';

const StairwellRoom = () => {
  const location = useLocation();
  
 return (
  <div key={location.path="stairwell"} className="stairwell-container page-fade-in">
    <h2>GALLERY UNDER CONSTRUCTION</h2>
    <div className="hammer-icon">
      <FaHammer />
    </div>
  </div>
 )
};

export default StairwellRoom;