export function NewTodoForm() {
    return(

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
    )
}
