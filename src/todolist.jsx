export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo">
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onToggle(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>

          <button
            className="btn delete"
            onClick={() => onDelete(todo.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
