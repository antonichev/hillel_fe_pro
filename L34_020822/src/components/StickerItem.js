import { removeSticker, updateSticker } from '../services/api';
import { useState, useRef } from 'react';

const StickerItem = ({ id, description, setData, data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [showDel, setShowDel] = useState(true);
  const [showCancel, setShowCancel] = useState(false);
  const canDel = useRef(false);

  const deleteSticker = () => {
    removeSticker(id).then((resp) => {
      const filteredStickers = data.filter((item) => item.id !== id);
      setData(filteredStickers);
    });
  };

  const saveSticker = () => {
    updateSticker(id, currentDescription).then((res) => {
      const sticker = data.find((item) => item.id === id);
      sticker.description = currentDescription;

      setData([...data]);
    });
  };

  const askForCancel = () => {
    setShowCancel(true);
    setShowDel(false);
    canDel.current = true;

    setTimeout(() => {
      if (canDel.current) deleteSticker();
    }, 5000);
  };

  const cancelButton = () => {
    if (!showCancel) return null;

    return (
      <div
        className='st-btn btn-cancel'
        onClick={() => {
          canDel.current = false;
          setShowCancel(false);
          setShowDel(true);
        }}
      >
        <i className='fas fa-undo'></i>
      </div>
    );
  };

  const delButton = () => {
    if (!showDel) return null;

    return (
      <div className='st-btn btn-del' onClick={askForCancel}>
        <i className='fa-solid fa-trash-can'></i>
      </div>
    );
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const descInput = () => {
    return (
      <textarea
        className='sticker-area'
        type='test'
        value={currentDescription}
        onBlur={() => {
          toggleEdit();
          saveSticker(currentDescription);
        }}
        onChange={(e) => setCurrentDescription(e.target.value)}
        autoFocus
      />
    );
  };
  const descParagraph = () => {
    return <p onClick={toggleEdit}>{currentDescription}</p>;
  };

  return (
    <div className='sticker-item'>
      <div className='st-buttons'>
        {delButton()}
        {cancelButton()}
      </div>
      {isEdit ? descInput() : descParagraph()}
    </div>
  );
};

export default StickerItem;
