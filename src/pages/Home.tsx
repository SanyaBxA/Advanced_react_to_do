import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useTodos } from '../TodoContext';

function Home() {
  const { addTodo } = useTodos();

  return (
    <div className="page-box">
      <h1> To-do app</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList />
    </div>
  );
}

export default Home;