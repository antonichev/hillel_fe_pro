import { useState } from 'react';

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const { putData, deleteData } = props;

  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const form = () => {
    return (
      <form
        className='edit-todo-form'
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
          className='edit-todo-input'
        />
        <input className='edit-todo-submit' type='submit' value='OK' />
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
    <>
      {edit ? form() : paragraph()}
      <div className='todo-buttons'>
        <span className='btn-menu'>Menu</span>
        <button
          className='btn btn-edit'
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
        <button
          className='btn btn-complete'
          onClick={() => putData(id, { title, completed: !completed })}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button className='btn btn-delete' onClick={() => deleteData(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
