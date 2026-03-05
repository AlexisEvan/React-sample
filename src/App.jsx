import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const title = newItem.trim();
    if (!title) return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
    setNewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <label className="title">New Todos</label>

        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="Item"
          className="input"
        />

        <button type="submit" className="btn add">
          Add
        </button>
      </form>

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
