import { useLocation } from 'react-router-dom';
import { FaHammer } from 'react-icons/fa';
import './GreenRoom.styles.scss';

const GreenRoom = () => {
  const location = useLocation();

  return (
    <div key={location.path="green-room"} className="green-room-container page-fade-in">
      <h2>GALLERY UNDER CONSTRUCTION</h2>
      <div className="hammer-icon">
        <FaHammer />
      </div>
    </div>
  )
};

export default GreenRoom;