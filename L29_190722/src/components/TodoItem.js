import { useState } from 'react';

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const { putData, deleteData } = props;

  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const form = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putData(id, { title: newTitle });
          setEdit(!edit);
        }}
      >
        <input
          type='text'
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input type='submit' value='OK' />
      </form>
    );
  };

  const paragraph = () => {
    return (
      <p
        style={{
          textDecoration: completed && 'line-through',
        }}
      >
        {title}
      </p>
    );
  };

  return (
    <div className='todo-item'>
      {edit ? form() : paragraph()}
      <button onClick={() => deleteData(id)}>Delete</button>
      <button onClick={() => putData(id, { title, completed: !completed })}>
        Completed
      </button>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
