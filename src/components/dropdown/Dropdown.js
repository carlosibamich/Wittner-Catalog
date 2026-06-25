import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dropdown.styles.scss';

const Dropdown = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef(null);
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
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="mobile-menu-container">
      <div className="burger-menu-box">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`burger-btn ${isOpen ? 'is-open' : ''}`}
          aria-label='Toggle Menu'
        >
          <span className="burger-line line-top"></span>
          <span className="burger-line line-middle"></span>
          <span className="burger-line line-bottom"></span>
        </button>
        <div className="menu-word-box">
          <p>MENU</p>
        </div>
        
      </div>

      <div 
        className={`menu-scrim ${isOpen ? 'is-open' : ''}`} 
        onClick={() => setIsOpen(false)}
      />

      <div className={`dropdown-menu ${isOpen ? 'is-visible' : ''}`}>
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
    </div>
  );
};

export default Dropdown;