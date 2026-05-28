import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Audio from '../../components/audio/Audio';
import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { directory } from '../directory/directory';
import './ImageModal.styles.scss';

function ImageModal({ show, onHide, title, imageSrc }) {

  const [ playingId, setPlayingId ] = useState(null);

  const itemWithAudio = directory.find(item => item.title === title);
  const handleAudioEnded = () => setPlayingId(null);

  return (
    <>
      <Modal
        show={show} 
        onHide={onHide} 
        centered
        size="lg"
        // className="custom-modal"
        dialogClassName="custom-modal-width"
      >
        <Modal.Header className="border-0 flex-wrap" closeButton closeVariant="white"></Modal.Header>
          <Modal.Body>
            <img src={imageSrc} className="modal-img-constrained" alt="Selected" />
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
    </>
  );
};

export default ImageModal;