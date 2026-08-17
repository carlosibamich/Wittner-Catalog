import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnapCarousel } from 'react-snap-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Dropdown from '../../components/dropdown/Dropdown';
import ScreenToggleButton from '../../components/screen-toggle-button/ScreenToggleButton';
import GreenRoomNorth from '../../components/green-room/green-room-north/GreenRoomNorth';
import GreenRoomEast from '../../components/green-room/green-room-east/GreenRoomEast';
import GreenRoomSouth from '../../components/green-room/green-room-south/GreenRoomSouth';
import GreenRoomWest from '../../components/green-room/green-room-west/GreenRoomWest';
import GreenRoomColumn from '../../components/green-room/green-room-column/GreenRoomColumn';
import './GreenRoom.styles.scss';

const GreenRoom = () => {

  const {
    scrollRef,
    pages,
    goTo,
    prev,
    next,
    activePageIndex,
  } = useSnapCarousel();

  const labels = ['NORTH', 'EAST', 'SOUTH', 'WEST', 'COLUMN'];

  const greenRoomSlides = [
    {
      id: 1,
      content: <GreenRoomNorth />
    }, 
    { 
      id: 2,
      content: <GreenRoomEast />
    }, 
    {
      id: 3,
      content: <GreenRoomSouth />
    }, 
    {
      id: 4,
      content: <GreenRoomWest />
    },
    {
      id: 5,
      content: <GreenRoomColumn />
    },
  ];

  const handleNext = useCallback(() => {
    if (activePageIndex === pages.length - 1) {
      goTo(0);
    } else {
      next();
    }
  }, [activePageIndex, pages.length, goTo, next]);

  const handlePrev = useCallback(() => {
   if (activePageIndex === 0) {
      goTo(pages.length - 1);
   } else {
      prev();
   }
  }, [activePageIndex, pages.length, goTo, prev]);
  const location = useLocation();

  return (
    <div key={location.path === "green-room" ? "green-room" : "other"} className="page-fade-in carousel-container">
      <div className="controls-bar">
        <div className="dropdown">
          <Dropdown />
        </div>
        <div className="controls">
          {/* ----------- < Previous Button ---------- */}
          <button className="arrow" onClick={handlePrev}>
            <FaAngleLeft />
          </button>
      
          { /* -------- Pagination -------- */}
          <div className="labels-container">
            {labels.map((word, i) => (
              <button 
                key={i} 
                onClick={() => goTo(i)}
                className={`page-button ${activePageIndex === i ? 'active-button' : ''}`}
              >
                {word}
              </button>
            ))}
          </div>
        
          {/* ----------- Next Button ---------- */}
          <button className="arrow" onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
        <div className="screen-toggle-button">
          <ScreenToggleButton />
        </div>
      </div>
      <ul ref={scrollRef} className="gallery-container">
      {greenRoomSlides.map((item) => (
        <div key={item.id} className="wall-item">
          {item.content}
        </div>
      ))};
      </ul> 
    </div>
  )
};

export default GreenRoom;