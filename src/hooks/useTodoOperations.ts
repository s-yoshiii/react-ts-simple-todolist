import { ChangeEvent, FormEvent, useState } from "react";
type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
};
const useTodoOperations = () => {
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
    if (inputValue === "") {
      return;
    }
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };
  const handleEdit = (id: number, inputValue: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodo);
  };
  const handleCheck = (id: number, checked: boolean) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodo);
  };
  const handleDelete = (id: number) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return {
    inputValue,
    todos,
    handleChange,
    handleSubmit,
    handleEdit,
    handleCheck,
    handleDelete,
  };
};

export default useTodoOperations;
