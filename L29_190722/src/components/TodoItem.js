import {TODO_URL} from '../constants/urls'

const TodoItem = (props) => {
  
  const {id, title, createdAt, completed} = props.todo
  const fetchData = props.fetchData

  return (
    <div className="todo-item">
      <p>{id}</p>
      <p>{title}</p>
      <p>{createdAt}</p>
      <p>{completed}</p>
      <button onClick={() => fetchData(`${TODO_URL}/${id}`, {method: 'DELETE'})}>Delete</button>
    </div>
  )
}

export default TodoItem