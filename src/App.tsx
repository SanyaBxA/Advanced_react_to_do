// import { useState } from "react";

// import "./App.css";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import type { Todo } from "./types";

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodo = (text: string) => {
//     const newTodo: Todo = { id: Date.now(), text };
//     setTodos([...todos, newTodo]);
//   };

//     const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//  return (
//     <div className="app-container">
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );

// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
