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
    <form onSubmit={addTodo}>
      <input ref={title} type='text' required placeholder='Enter Todo Here' />
      <input type='submit' value='ADD' />
    </form>
  );
};

export default TodoForm;
