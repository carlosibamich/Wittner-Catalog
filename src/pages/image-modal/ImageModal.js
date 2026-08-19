import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Audio from '../../components/audio/Audio';
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { directory } from '../directory/directory';
import './ImageModal.styles.scss';

function ImageModal({ show, onHide, title, imageSrc }) {
  const [ playingId, setPlayingId ] = useState(null);

  const itemWithAudio = directory.find(item => item.title === title);
  const handleAudioEnded = () => setPlayingId(null);

  // CRITICAL MEMORY PATCH FOR IOS WEBKIT
  // Forces the browser to dump the heavy image asset from the DOM context immediately upon unmount
  useEffect(() => {
    return () => {
      setPlayingId(null); // Explicitly kill any active audio tracking state
      
      // Target the modal's specific image directly in the DOM and sever its connection
      const modalImg = document.querySelector('.modal-img-constrained');
      if (modalImg) {
        modalImg.src = '';
        modalImg.removeAttribute('src');
      }
    };
  }, []);

  return (
    <Modal
      show={show} 
      onHide={onHide} 
      centered
      size="lg"
      dialogClassName="custom-modal-width"
      restoreFocus={false}
      animation={true}
    >
      <Modal.Header className="border-0 flex-wrap" closeButton closeVariant="white" />
        <Modal.Body>
          {imageSrc && (
            <img 
              src={imageSrc} 
              className="modal-img-constrained" 
              alt="Selected Artwork" 
              decoding="async"
            />
          )}
          {/* <img src={imageSrc} className="modal-img-constrained" alt="Selected" /> */}
          <Modal.Title className="w-100" >
            <p><span>Title:</span>{title}</p>
            <span className="audio">
              {itemWithAudio?.audio && (
                <div className="audio-content">
                  <p>Audio</p>
                  <Audio 
                    key={itemWithAudio.id || itemWithAudio.audio}
                    item={itemWithAudio}
                    isPlaying={playingId === itemWithAudio.id}
                    onToggle={() => setPlayingId(playingId === itemWithAudio.id ? null : itemWithAudio.id)}
                    onEnded={handleAudioEnded}
                  />
                </div>
              )}
            </span>
          </Modal.Title>
        </Modal.Body>
    </Modal>
  );
};

export default ImageModal;