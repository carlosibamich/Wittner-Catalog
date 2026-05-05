import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnapCarousel } from 'react-snap-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import AlcoveNorth from '../../components/alcove/alcove-north/AlcoveNorth';
import AlcoveEast from '../../components/alcove/alcove-east/AlcoveEast';
import AlcoveSouth from '../../components/alcove/alcove-south/AlcoveSouth';
import AlcoveWest from '../../components/alcove/alcove-west/AlcoveWest';
// import './MainRoom.styles.scss';

const AlcoveRoom = () => {

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

  const labels = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  const alcoveRoomSlides = [
    {
      id: 1,
      content: <AlcoveNorth />
    }, 
    { 
      id: 2,
      content: <AlcoveEast />
    }, 
    { 
      id: 3,
      content: <AlcoveSouth />
    }, 
    {
      id: 4,
      content: <AlcoveWest />
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

        {/* ----------- Next Button ---------- */}
        <button className="arrow" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>
      <ul ref={scrollRef} className="gallery-container">
        {alcoveRoomSlides.map((item) => (
          <div key={item.id} className="wall-item">
            {item.content}
          </div>
        ))};
      </ul> 
    </div>
  )
};

export default AlcoveRoom;