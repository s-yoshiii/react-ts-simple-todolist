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
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container max-w-md p-4 md:p-12">
        <h1 className="text-3xl font-bold text-white mb-4">Simple TodoList</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-start mb-4">
            <input
              type="text"
              className="form-input rounded-md focus:bg-green-50 transition ease-in duration-200 mr-1"
              onChange={(e) => handleChange(e)}
              value={inputValue}
            />
            <button
              type="submit"
              className="rounded-md bg-blue-900 text-white px-4 py-2 tracking-wide"
            >
              Add
            </button>
          </div>
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
              <div className="before:content-[''] before:block before:w-6 before:h-6 before:border-orange-400 before:bg-orange-400 before:border relative">
                <input
                  type="checkbox"
                  className="form-checkbox absolute top-0 left-0 opacity-0"
                  onChange={(e) => handleCheck(todo.id, todo.checked)}
                />
              </div>
              <button
                type="button"
                className="rounded-md bg-blue-900 text-white px-4 py-2 tracking-wide"
                onClick={(e) => handleDelete(todo.id)}
              >
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
