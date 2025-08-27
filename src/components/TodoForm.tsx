import type { FormEvent } from 'react';
import { useState } from 'react';

interface TodoFormProps {
  addTodo: (title: string, description: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;
    addTodo(title.trim(), description.trim());
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
  <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={e => setTitle(e.target.value)}
    className="todo-input"
  />
  <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={e => setDescription(e.target.value)}
    className="todo-input"
  />
  <button type="submit" className="todo-button">
    Add Todo
  </button>
</form>

  );
}

export default TodoForm;
