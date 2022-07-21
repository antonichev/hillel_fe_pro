import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState({
    loading: false,
    error: undefined,
    todos: null,
  });

  useEffect(() => {
    getData(url);
  }, []);

  const getData = (url) => {
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

  const postData = (url, todo) => {
    setData({ loading: true });
  };

  const putData = (url, todo) => {
    setData({ loading: true });
  };

  const deleteData = (url, todo) => {
    setData({ loading: true });
  };

  return {
    ...data,
    postData,
    putData,
    deleteData,
  };
};

export default useFetch;
