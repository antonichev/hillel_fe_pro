import { addSticker } from '../services/api';

const AddButton = ({ data, setData }) => {
  const addNewSticker = () => {
    addSticker({ description: 'Add description here' }).then((res) =>
      setData([...data, res.data]),
    );
  };

  return (
    <div className='add-btn'>
      <span onClick={addNewSticker}>
        <i className='fa-solid fa-circle-plus fa-2xl'></i>
      </span>
    </div>
  );
};

export default AddButton;
