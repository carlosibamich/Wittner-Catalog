import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnapCarousel } from 'react-snap-carousel';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Dropdown from '../../components/dropdown/Dropdown';
import ScreenToggleButton from '../../components/screen-toggle-button/ScreenToggleButton';
import EntryNorth from '../../components/entry/entry-north/EntryNorth';
import EntryEast from '../../components/entry/entry-east/EntryEast';
import EntrySouth from '../../components/entry/entry-south/EntrySouth';
import EntryWest from '../../components/entry/entry-west/EntryWest';
import './EntryRoom.styles.scss';

const EntryRoom = () => {

  const {
    scrollRef,
    pages,
    goTo,
    prev,
    next,
    activePageIndex,
  } = useSnapCarousel();

  const labels = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  const entrySlides = [
    {
      id: 1,
      content: <EntryNorth />
    }, 
    { 
      id: 2,
      content: <EntryEast />
    }, 
    {
      id: 3,
      content: <EntrySouth />
    }, 
    {
      id: 4,
      content: <EntryWest />
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
    <div key={location.path === "entry" ? "entry-room" : "other"} className="page-fade-in carousel-container">
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

          {/* ----------- Next Button > ---------- */}
          <button className="arrow" onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
        <div className="screen-toggle-button">
          <ScreenToggleButton />
        </div>
      </div>
      <ul ref={scrollRef} className="gallery-container">
        {entrySlides.map((item) => (
          <div key={item.id} className="wall-item">
            {item.content}
          </div>
        ))};
      </ul> 
    </div>
  );
};

export default EntryRoom;