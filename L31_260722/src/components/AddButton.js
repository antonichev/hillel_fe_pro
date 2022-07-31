import { addSticker } from '../services/api';

const AddButton = ({ data, setData }) => {
  const emptySticker = {
    description: 'Add description here',
  };

  const addNewSticker = () => {
    addSticker(emptySticker).then((resp) => {
      setData([...data, resp.data]);
    });
  };

  return (
    <div className='add-btn'>
      <span onClick={addNewSticker}>
        <i class='fa-solid fa-circle-plus fa-2xl'></i>
      </span>
    </div>
  );
};

export default AddButton;
