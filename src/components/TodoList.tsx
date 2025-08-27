import { useTodos } from "../TodoContext";

function TodoList() {
  const { todos, toggleTodo } = useTodos();

  const pending = todos.filter((todo) => !todo.completed);
  const completed = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2>Pending Tasks</h2>
      {pending.length === 0 ? (
        <p>No pending tasks.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pending.map((todo, i) => (
            <li key={i} className="todo-item">
              <strong>{todo.title}</strong>
              <span>{todo.description}</span>
              <button className="button-complete" onClick={() => toggleTodo(i)}>
                Mark Completed
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Completed Tasks</h2>
      {completed.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {completed.map((todo, i) => (
            <li key={i} className="todo-item">
              <strong>{todo.title}</strong>
              <span>{todo.description}</span>
              <button
                className="button-pending"
                onClick={() => toggleTodo(todos.indexOf(todo))}
              >
                Mark Pending
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
