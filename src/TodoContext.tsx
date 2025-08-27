import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Todo } from './types';


interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  toggleTodo: (index: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within TodoProvider');
  return context;
}


export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, description: string) => {
    setTodos([...todos, { title, description, completed: false }]);
  };

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
