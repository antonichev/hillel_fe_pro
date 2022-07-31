import { getStickers } from '../services/api';
import StickerList from './StickerList';
import AddButton from './AddButton';
import { useState, useEffect } from 'react';

const StickerBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStickers().then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <>
      <AddButton setData={setData} data={data} />
      <div className='sticker-board'>
        <StickerList data={data} setData={setData} />
      </div>
    </>
  );
};

export default StickerBoard;
