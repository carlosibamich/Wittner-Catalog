import { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { RxSpeakerLoud } from "react-icons/rx";
import { directory } from '../directory/directory';
import './ImageModal.styles.scss';

function ImageModal({ icon, title, show, onHide, imageSrc }) {

  return (
    <>
      <Modal
        show={show} 
        onHide={onHide} 
        centered
        size="lg"
        dialogClassName="custom-modal-width"
      >
        <Modal.Header className="border-0" closeButton closeVariant="white"></Modal.Header>
        <Modal.Body>
          <img src={imageSrc} className="modal-img-constrained" alt="Selected" />
          <div className="footer-content">
            <p className="mt-3 modal-title">{title}</p>
            {directory.find((item) => item.title === title)?.audio && (
              <button className="mt-2 audio">
                <RxSpeakerLoud  />
              </button>
            )};
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;