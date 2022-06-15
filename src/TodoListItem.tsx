import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{
          textDecoration: todo.complete ? "line-through" : undefined,
        }}
      >
        <input
          type="checkbox"
          onClick={() => {
            toggleTodo(todo);
          }}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};
export default TodoListItem;
