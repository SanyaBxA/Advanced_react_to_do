import type { FormEvent } from 'react';
import  { useState } from 'react';


interface TodoFormProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
