import { ChangeEvent, FormEvent, useCallback, useState } from "react";
type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
};
const useTodoOperations = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
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
    },
    [inputValue, todos]
  );
  const handleEdit = useCallback(
    (id: number, inputValue: string) => {
      const newTodo = todos.map((todo) => {
        if (todo.id === id) {
          todo.inputValue = inputValue;
        }
        return todo;
      });
      setTodos(newTodo);
    },
    [todos]
  );
  const handleCheck = useCallback(
    (id: number, checked: boolean) => {
      const newTodo = todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !checked;
        }
        return todo;
      });
      setTodos(newTodo);
    },
    [todos]
  );
  const handleDelete = useCallback(
    (id: number) => {
      const newTodo = todos.filter((todo) => todo.id !== id);
      setTodos(newTodo);
    },
    [todos]
  );
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
