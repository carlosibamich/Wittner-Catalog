import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dropdown.styles.scss';

const Dropdown = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ currentPageTitle, setCurrentPageTitle ] = useState('');
  const dropdownRef = useRef(null);
  const menuPortalRef = useRef(null);
  const navigate = useNavigate();
  const thisLocation = useLocation();

  const options = [
    { label: "ENTRY", path: '/entry'},
    { label: "MAIN ROOM", path: '/'}, 
    { label: "ALCOVE", path: '/alcove'},
    { label: "STAIRWELL", path: '/stairwell'},
    { label: "GREEN ROOM", path: '/green-room'},
    { label: " CATALOG", path: '/catalog-list'}
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout (() => {
      setIsOpen(false);
    }, 50);
  };

  // To exit the dropdown by clicking outside the dropdown menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      
      if (menuPortalRef.current && menuPortalRef.current.contains(e.target)) return;

      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isOpen]);

  // To display the Active Page Title next to the menu icon
  useEffect(() => {
    const currentItem = options.find(item => item.path === thisLocation.pathname);
    
    if (currentItem) {
      setCurrentPageTitle(currentItem.label);
    } else {
      setCurrentPageTitle('Wittner Museum'); // Fallback title
    }
  }, [thisLocation.pathname]);

  return (
    <div ref={dropdownRef} className="mobile-menu-container">

      <div className="burger-menu-box">
        <button
          onClick={() => setIsOpen(true)}
          className="burger-btn"
          aria-label='Open Menu'
          style={{ visibility: isOpen ? 'hidden' : 'visible' }}
        >
          <span className="burger-line line-top"></span>
          <span className="burger-line line-middle"></span>
          <span className="burger-line line-bottom"></span>
        </button>

        <div className="current-title-box">
          <h2 className="title">{currentPageTitle}</h2>
          <h2 className="menu">MENU</h2>
        </div>
      </div>

      {createPortal(
        <>
          <div 
            className={`menu-scrim ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(false)}
          />

          <div 
            ref={menuPortalRef} 
            className={`dropdown-menu ${isOpen ? 'is-visible' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >

            <button
            onClick={() => setIsOpen(false)}
            className={`burger-btn is-open-portal ${isOpen ? 'animate-x' : ''}`}
            aria-label='Close Menu'
            >
              <span className="burger-line line-top"></span>
              <span className="burger-line line-middle"></span>
              <span className="burger-line line-bottom"></span>
            </button>

            <div className="spacer"></div>
            {options.map((option) => {
              const isActive = thisLocation.pathname === option.path;
              return (
                <button
                  key={option.path}
                  onClick={() => handleNavigation(option.path)}
                  className={`menu-option ${isActive ? 'active' : ''}`}
                >
                  {option.label}
                </button>
              ); 
            })}
          </div>
        </>,
        document.getElementById('portal-root') || document.body
      )}
    </div>
  );
};

export default Dropdown;