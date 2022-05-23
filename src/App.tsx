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
        <h1 className="text-3xl font-bold text-white mb-8">Simple TodoList</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-between mb-8 pb-8 border-b-2 border-white">
            <input
              type="text"
              className="form-input rounded-sm focus:bg-green-50 focus:border-blue-900 w-60 transition ease-in duration-200 mr-2"
              onChange={(e) => handleChange(e)}
              value={inputValue}
            />
            <button
              type="submit"
              className="rounded-md bg-blue-900 text-white px-4 py-2 tracking-wide w-1/4"
            >
              Add
            </button>
          </div>
        </form>
        <ul>
          {todos.map((todo) => (
            <li className="flex justify-start items-center mb-4" key={todo.id}>
              <input
                className="form-input rounded-sm focus:bg-green-50 focus:border-blue-900 disabled:bg-gray-300 w-60 transition ease-in duration-200 mr-2"
                type="text"
                value={todo.inputValue}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                className="form-checkbox w-6 h-6 border-blue-900 text-blue-900 border-1 shadow-none focus:ring focus:ring-blue-900 focus:ring-offset-0 focus:ring-opacity-0 mr-2"
                onChange={(e) => handleCheck(todo.id, todo.checked)}
              />
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
