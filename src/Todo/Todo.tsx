import React, { Suspense, useEffect, useState } from 'react';
import { fetchTodos, TodoItem } from './fetchTodos.ts';
import Loading from './Loading.tsx';
import ErrorMessage from './ErrorMessage.tsx';
import useTodos from './useTodos.ts';

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
        // setError(undefined);
      }).catch((err) => {
        // setTodos(undefined);
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
  | { status: 'success', todos: Array<TodoItem> } 

const Todo2 = () => {
  const [data, setData] = useState<DataState>({ status: 'idle'});

  useEffect(() => {
    let didCancel = false;
    setData({ status: 'loading'})
    if (!didCancel) {
     fetchTodos().then((data) => {
        setData({ status: 'success', todos: data});
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
          {data.todos.map((todo) => {
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

const Todo3 = () => {
  const { data: todos = [], error, isError, isFetching } = useTodos();

  return (
    <>
      {isFetching ? <Loading /> : null}
      {isError ? <ErrorMessage error={error} /> : null}
      {todos.length > 0 ?
        <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>{todo.name}</li>
          )
        })}
        </ul> : null
      }
    </>
  )
}

// server component example
const Todo4 = async () => {
  const todos = await fetchTodos();

  return (
    <Suspense fallback={<Loading />}>
    {todos.length > 0 ?
      <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>{todo.name}</li>
        )
      })}
      </ul> : null
    }
    </Suspense>
  )
}

export default Todo1;
// export default Todo2;
// export default Todo3;