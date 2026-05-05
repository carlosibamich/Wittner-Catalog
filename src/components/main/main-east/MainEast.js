import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Stage from '../stage/Stage';
import NorthExit from '../main-north-exit/NorthExit';
import './MainEast.styles.scss';

const MainEast = () => {
  // --------------------- Framer Motion --------------------- //
  
    const [ activeGallery, setActiveGallery ] = useState('initial');
    const [ selectedGallery, setSelectedGallery ] = useState(null);
  
    const openGallery = (galleryName) => {
      setSelectedGallery(galleryName);
      setActiveGallery('detailed');
    }
  
    const closeGallery = () => {
      setActiveGallery('initial');
    }
  
    // ------------------------ End ------------------------ //

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        {activeGallery === 'initial' && (
          <Stage 
            key="initial" 
            onOpenGallery={openGallery}
          />
        )}
        {activeGallery === 'detailed' && (
          <NorthExit 
            key="detailed"
            galleryName={selectedGallery}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </div>
  )
};

export default MainEast;