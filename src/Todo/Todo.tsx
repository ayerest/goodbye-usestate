import React, { useEffect, useState } from 'react';
import { fetchTodos, TodoItem } from './fetchTodos.ts';
import Loading from './Loading.tsx';
import ErrorMessage from './ErrorMessage.tsx';

const Todo1 = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let didCancel = false;
    setLoading(true)
    if (!didCancel) {
     fetchTodos().then((data) => {
        setTodos(data);
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      })
    }
    return () => {
      didCancel = true;
    }
  }, [setTodos, setError, setLoading])

  return (
    <>
    {loading ? <Loading /> : null}
    {error ? <ErrorMessage error={error} /> : null}
    {todos ? 
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.name}</li> 
          )
        })}
      </ul> 
      : null
    }
    </>
  )
}

type DataState = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error', error: string }
  | { status: 'success', data: Array<TodoItem> } 

const Todo2 = () => {
  const [data, setData] = useState<DataState>({ status: 'idle'});

  useEffect(() => {
    let didCancel = false;
    setData({ status: 'loading'})
    if (!didCancel) {
     fetchTodos().then((data) => {
        setData({ status: 'success', data});
      }).catch((err) => {
        setData({ status: 'error', error: err});
      })
    }
    return () => {
      didCancel = true;
    }
  }, [setData])

  return (
    <>
    {data.status === 'loading' ? <Loading /> : null}
    {data.status === 'error'  ? <ErrorMessage error={data.error} /> : null}
    {data.status === 'success' ? 
      <ul>
        {data.data.map((todo) => {
          return (
            <li key={todo.id}>{todo.name}</li> 
          )
        })}
      </ul> 
      : null
    }
    </>
  )
}

export default Todo1;
// export default Todo2;