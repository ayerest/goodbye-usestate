export type TodoItem = {
  id: number;
  name: string;
}

export const delay = async (delay = 1000, callback = () => {}) => {        

  const delayPromise = ms => new Promise(res => setTimeout(res, ms))
  await delayPromise(delay)

  callback()
}

export const fetchTodos = async (): Promise<Array<TodoItem>> => {
  await delay(2000, () => {});
  const shouldThrowError = Math.random() * 100 > 65;
  if (shouldThrowError) {
    throw new Error('Error loading TODOs!!')
  }
  return [
    {id: 1, name: 'Create demos'},
    {id: 2, name: 'Finish powerpoint'}
  ]
}