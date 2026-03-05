import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./newtodoform";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>

            <button
              className="btn delete"
              onClick={() => deleteTodo(todo.id)}
              type="button"
            >
            Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
