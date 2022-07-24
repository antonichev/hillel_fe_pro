import useFetch from '../hooks/useFetch';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { loading, todos, error, postData, putData, deleteData } = useFetch();

  if (loading) {
    return 'List is loading';
  }

  if (error) {
    console.log(error);
    return error;
  }

  return (
    <div>
      <TodoForm postData={postData} />
      <ul className='todo-list'>
        {todos?.map((item) => (
          <li
            key={item.id}
            className='todo-item'
            style={{
              backgroundColor: item.completed && '#cffaea',
            }}
          >
            <TodoItem todo={item} deleteData={deleteData} putData={putData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
