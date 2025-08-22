import { useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  
    const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


 return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );

}


export default App;
