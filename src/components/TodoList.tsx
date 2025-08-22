

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button
            className="delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;


