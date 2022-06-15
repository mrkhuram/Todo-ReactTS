import React, { useState } from "react";

interface Props {
  add: AddTodo;
}

const TodoForm: React.FC<Props> = ({ add }) => {
  let [todoText, setTodoText] = useState("");
  return (
    <form>
      <input
        type="text"
        name="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          add(todoText);
          setTodoText("");
        }}
      >
        Add Item
      </button>
    </form>
  );
};

export default TodoForm;
