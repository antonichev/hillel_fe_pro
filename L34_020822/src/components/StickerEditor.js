import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSticker, updateSticker } from './../services/api';
import { useTheme } from './../context/ThemeContext';

const StickerField = () => {
  const [desc, setDesc] = useState(undefined);
  const { id } = useParams();
  const redirect = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    getSticker(id).then((res) => {
      setDesc(res.data.description);
    });
    // eslint-disable-next-line
  }, []);

  const saveSticker = (e) => {
    e.preventDefault();
    updateSticker(id, desc).then((res) => {
      redirect('/');
    });
  };

  return (
    <div className={`edit-container ${theme}`}>
      <form className={`edit-form ${theme}`} onSubmit={saveSticker}>
        <input
          type='text'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type='submit' value='Apply' />
      </form>
    </div>
  );
};

export default StickerField;
