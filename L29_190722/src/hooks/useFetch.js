import { useEffect, useState } from 'react';
import { TODO_URL as url } from '../constants/urls';

const useFetch = () => {
  const [data, setData] = useState({
    loading: false,
    error: undefined,
    todos: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData({ loading: true });

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        return res.json();
      })
      .then((res) => {
        setData({
          loading: false,
          todos: res,
        });
      })
      .catch((error) => {
        setData({
          loading: false,
          error: error,
        });
      });
  };

  const postData = (todo) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        return res.json();
      })
      .then((res) => {
        const todos = data.todos;

        todos.push(res);

        setData({ todos });
      })
      .catch((error) => {
        setData({
          error: error,
        });
      });
  };

  const putData = (id, todo) => {
    fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(todo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        const todos = data.todos;

        let result = todos.find((item, index) => {
          if (item.id === id) {
            data.todos[index] = {
              ...data.todos[index],
              title: todo.title,
              completed: todo.completed,
            };
            return true;
          }
          return false;
        });

        if (result) {
          setData({ todos });
        }
      })
      .catch((error) => {
        setData({
          error: error,
        });
      });
  };

  const deleteData = (id) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }

        const todos = data.todos.filter((item) => item.id !== id);

        setData({ todos });
      })
      .catch((error) => {
        setData({
          error: error,
        });
      });
  };

  return {
    ...data,
    postData,
    putData,
    deleteData,
  };
};

export default useFetch;
