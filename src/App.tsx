import { ChangeEvent, FormEvent, useState } from "react";

type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
};
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <div className="container px-4 md:px-12">
        <h1 className="text-3xl font-bold text-white mb-4">Simple TodoList</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-input rounded-md focus:bg-green-50 transition ease-in duration-200"
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="作成" className="form-input" />
        </form>
      </div>
    </div>
  );
}

export default App;
