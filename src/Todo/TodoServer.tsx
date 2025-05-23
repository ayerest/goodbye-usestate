import React from 'react';
import { fetchTodos } from './fetchTodos.ts';

async function Todo4 () {
  const todos = await fetchTodos();

  return (
    <>
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

export default Todo4;