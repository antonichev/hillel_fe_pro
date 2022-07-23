import { useRef } from 'react';

const TodoForm = ({ postData }) => {
  const title = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();

    const todo = {
      title: title.current.value,
      completed: false,
    };

    title.current.value = '';

    postData(todo);
  };

  return (
    <form className='add-todo-form' onSubmit={addTodo}>
      <input
        ref={title}
        className='add-todo-input'
        type='text'
        required
        placeholder='Enter Todo Here'
      />
      <input className='add-todo-submit' type='submit' value='ADD' />
    </form>
  );
};

export default TodoForm;
