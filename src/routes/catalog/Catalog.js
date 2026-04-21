import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { directory } from '../../pages/directory/directory';
import ImageModal from '../../pages/image-modal/ImageModal';
import { AiOutlineAudio } from "react-icons/ai";
import './Catalog.styles.scss';


const Catalog = () => {
  const location = useLocation();

  return (
   <div key={location.path="catalog-list"} className="list-container page-fade-in">
    <ul className="list-grid">
      {directory.map((item) => (
        <li key={item.id}>
          <div className="list-items-container">
            <div className="audio-icon">
              {item.audio ? <AiOutlineAudio /> : null}
            </div>
            <div className="image-container">
              <img src={item.imgSrc} className="border-shadow-sm image" />
            </div>
            <div className="info-container">
              <div className="id-area">
                <h3>{item.id}</h3>
              </div>
              <div className="title-area">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
   </div>
  );
};

export default Catalog;