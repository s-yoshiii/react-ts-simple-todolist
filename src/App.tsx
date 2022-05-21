import useTodoOperations from "./hooks/useTodoOperations";

function App() {
  const {
    inputValue,
    todos,
    handleChange,
    handleSubmit,
    handleEdit,
    handleCheck,
    handleDelete,
  } = useTodoOperations();
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <div className="container max-w-md p-4 md:p-12">
        <h1 className="text-3xl font-bold text-white mb-4">Simple TodoList</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-input rounded-md focus:bg-green-50 transition ease-in duration-200"
            onChange={(e) => handleChange(e)}
            value={inputValue}
          />
          <input type="submit" value="作成" className="form-input" />
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                className="form-input rounded-md focus:bg-green-50 transition ease-in duration-200"
                type="text"
                value={todo.inputValue}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={(e) => handleCheck(todo.id, todo.checked)}
              />
              <button type="button" onClick={(e) => handleDelete(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
