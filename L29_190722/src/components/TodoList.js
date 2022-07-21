import {TODO_URL} from '../constants/urls'
import useFetch from '../hooks/useFetch'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const {loading, todos, error, fetchData} = useFetch(TODO_URL)

  if(loading) {
    return 'List is loading'
  }

  if(error) {
    console.log(error)
    return error
  }

  return(
    <ul>
      {todos && todos.map((item) => 
        <li key={item.id}>
          <TodoItem 
            todo={item} 
            fetchData={fetchData}
          />
        </li>)
      }
    </ul>
  )
}

export default TodoList