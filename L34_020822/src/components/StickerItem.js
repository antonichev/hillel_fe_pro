import { removeSticker } from '../services/api';
import { useState, useRef } from 'react';
import { useTheme } from './../context/ThemeContext';
import { Link } from 'react-router-dom';

const StickerItem = ({ id, description, setData, data }) => {
  const [showCancel, setShowCancel] = useState(false);
  const canDel = useRef(false);
  const { theme } = useTheme();

  const deleteSticker = () => {
    removeSticker(id).then((resp) => {
      const filteredStickers = data.filter((item) => item.id !== id);
      setData(filteredStickers);
    });
  };

  const askForCancel = () => {
    setShowCancel(true);
    canDel.current = true;

    setTimeout(() => {
      if (canDel.current) deleteSticker();
    }, 5000);
  };

  const cancelButton = () => {
    return (
      <div
        className='st-btn btn-cancel'
        onClick={() => {
          canDel.current = false;
          setShowCancel(false);
        }}
      >
        <i className='fas fa-undo'></i>
      </div>
    );
  };

  const delButton = () => {
    return (
      <div className='st-btn btn-del' onClick={askForCancel}>
        <i className='fa-solid fa-trash-can'></i>
      </div>
    );
  };

  return (
    <div className={`sticker-item ${theme}`}>
      <div className='st-buttons'>
        {showCancel ? cancelButton() : delButton()}
      </div>
      <Link to={`stickers/${id}`}>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default StickerItem;
