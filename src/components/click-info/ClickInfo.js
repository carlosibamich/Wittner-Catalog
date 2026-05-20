import { IoFishOutline } from "react-icons/io5";
import './ClickInfo.styles.scss';

const ClickInfo = () => {
  return (
    <div className="click-info-container">
      <div className="click-info">
        <IoFishOutline className="fish mirrored-fish" />
        <hr className="line" />
        <p>Click on an image for larger view and extra content</p>
        <hr className="line" />
        <IoFishOutline className="fish" />
      </div>
    </div>
  )
};

export default ClickInfo;