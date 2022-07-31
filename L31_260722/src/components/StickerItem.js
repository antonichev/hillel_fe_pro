import { removeSticker, updateSticker } from '../services/api';
import { useState, useRef } from 'react';

const StickerItem = ({ id, description, setData, data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [showCancel, setShowCancel] = useState(false);
  const canDel = useRef(false);

  const deleteSticker = () => {
    removeSticker(id).then((resp) => {
      const filteredStickers = data.filter((item) => item.id !== id);
      setData(filteredStickers);
    });
  };

  const saveSticker = () => {
    updateSticker(id).then((resp) => {
      const sticker = data.find((item) => item.id === id);
      sticker.description = currentDescription;

      setData([...data]);
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
    if (!showCancel) return null;

    return (
      <button
        onClick={() => {
          canDel.current = false;
          setShowCancel(false);
        }}
      >
        Cancel delete
      </button>
    );
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const descInput = () => {
    return (
      <input
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
      {isEdit ? descInput() : descParagraph()}
      <div onClick={askForCancel} className='del-btn'>
        <i class='fas fa-trash-clock'></i>
      </div>
      {cancelButton()}
    </div>
  );
};

export default StickerItem;
