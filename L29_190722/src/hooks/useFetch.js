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
        const index = todos.findIndex((item) => item.id === id);
        todos[index].title = todo.title;
        todos[index].completed = todo.completed;

        setData({ todos });
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
