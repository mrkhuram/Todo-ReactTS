import React, { useState } from "react";

import TodoListItem from "./TodoListItem";
import TodoForm from "./AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];
function App() {
  let [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selected: Todo) => {
    let result = todos.map((item) => {
      if (item == selected) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setTodos(result);
  };

  const AddTodo: AddTodo = (text: string) => {
    let item = { text, complete: false };
    setTodos([...todos, item]);
  };

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoListItem key={item.text} todo={item} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <TodoForm add={AddTodo} />
    </div>
  );
}

export default App;
