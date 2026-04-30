import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnapCarousel } from 'react-snap-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import StairwellNorth from '../../components/stairwell/stairwell-north/StairwellNorth';
import StairwellEast from '../../components/stairwell/stairwell-east/StairwellEast';
import StairwellSouth from '../../components/stairwell/stairwell-south/StairwellSouth';
import StairwellWest from '../../components/stairwell/stairwell-west/StairwellWest';
import './StairwellRoom.styles.scss';

const StairwellRoom = () => {
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

  const stairwellRoomSlides = [
    {
      id: 1,
      content: <StairwellNorth />
    }, 
    { 
      id: 2,
      content: <StairwellEast />
    }, 
    {
      id: 3,
      content: <StairwellSouth />
    }, 
    {
      id: 4,
      content: <StairwellWest />
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
          {stairwellRoomSlides.map((item) => (
            <div key={item.id} className="wall-item">
              {item.content}
            </div>
          ))};
        </ul> 
      </div>
 )
};

export default StairwellRoom;