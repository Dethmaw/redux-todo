import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const todos = useSelector((state) => {
    return state.tasks;
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "0 auto",
        height: "200px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
    </div>
  );
};

export default TodoList;