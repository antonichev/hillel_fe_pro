import { getStickers } from '../services/api';
import StickerList from './StickerList';
import AddButton from './AddButton';
import { useEffect, useState } from 'react';

const StickerBoard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getStickers().then((res) => {
      setData(res.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {data && <AddButton data={data} setData={setData} />}
      {data && (
        <div className='sticker-board'>
          <StickerList data={data} setData={setData} />
        </div>
      )}
    </>
  );
};

export default StickerBoard;
