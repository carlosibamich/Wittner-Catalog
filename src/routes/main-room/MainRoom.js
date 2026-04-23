import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnapCarousel } from 'react-snap-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import MainNorth from '../../components/main/main-north/MainNorth';
import MainNorthExit from '../../components/main/main-north-exit/MainNorthExit';
import Stage from '../../components/main/stage/Stage';
import MainSouth from '../../components/main/main-south/MainSouth';
import MainWest from '../../components/main/main-west/MainWest';
// import './MainRoom.styles.scss';

const MainRoom = () => {

  const {
    scrollRef,
    pages,
    goTo,
    prev,
    next,
    activePageIndex,
    hasPrevPage,
    hasNextPage,
    snapPointIndexes,
    refresh,
  } = useSnapCarousel();

  const labels = ['NORTH', 'STAGE/EAST', 'SOUTH', 'WEST'];

  const mainRoomSlides = [
    {
      id: 1,
      content: <MainNorth />
    }, 
    { 
      id: 2,
      content: <Stage />
    }, 
    {
      id: 3,
      content: <MainSouth />
    }, 
    {
      id: 4,
      content: <MainWest />
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
    <div key={location.index} className="page-fade-in carousel-container">
      <div className="controls">
        {/* ----------- < Previous Button ---------- */}
        <button className="arrow" onClick={handlePrev}>
          <FaAngleLeft />
        </button>

        { /* -------- Pagination -------- */}
        <div classname="labels-container">
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
        {/* -------- End Pagination -------- */}

        {/* ----------- Next Button > ---------- */}
        <button className="arrow" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>
      <ul ref={scrollRef} className="gallery-container">
        {mainRoomSlides.map((item) => (
          <div key={item.id} className="wall-item">
            {item.content}
          </div>
        ))};
      </ul> 
    </div>
  )
};

export default MainRoom;