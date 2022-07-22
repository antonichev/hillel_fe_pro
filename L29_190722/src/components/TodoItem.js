const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const { putData, deleteData } = props;

  return (
    <div className='todo-item'>
      <p
        style={{
          textDecoration: completed && 'line-through',
        }}
      >
        {title}
      </p>
      <button onClick={() => deleteData(id)}>Delete</button>
      <button onClick={() => putData(id, { title, completed: !completed })}>
        Completed
      </button>
    </div>
  );
};

export default TodoItem;
