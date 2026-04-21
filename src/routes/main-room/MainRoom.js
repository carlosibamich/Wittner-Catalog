import { useLocation } from 'react-router-dom';
import MainNorth from '../../components/main/main-north/MainNorth';
import MainNorthExit from '../../components/main/main-north-exit/MainNorthExit';
import Stage from '../../components/main/stage/Stage';
import MainSouth from '../../components/main/main-south/MainSouth';
import MainWest from '../../components/main/main-west/MainWest';
import './MainRoom.styles.scss';

// const mainRoomWalls = [
//   <MainRoomNorth />, 
//   <MainRoomStageEast />, 
//   <MainRoomSouth />, 
//   <MainRoomWest />
// ];

const MainRoom = () => {
  const location = useLocation();
  
  return (
    <div key={location.index} className="gallery-container page-fade-in">
      <div className="wall-item">
        <MainNorth />
      </div>
      {/* <div className="wall-item">
        <MainNorthExit />
      </div> */}
      <div className="wall-item">
        <Stage />
      </div>
      <div className="wall-item">
        <MainSouth />
      </div>
      <div className="wall-item">
        <MainWest />
      </div>
    </div>
  )
};

export default MainRoom;