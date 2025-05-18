import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./fetchTodos.ts";

const useTodos = () => {
  return useQuery({queryKey: ['TODOS'], queryFn: fetchTodos})
}

export default useTodos;