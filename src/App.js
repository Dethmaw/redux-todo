import React from "react";
import "./styles.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { deleteAll } from "./redux/tasksSlice";

const App = () => {
  const dispatch = useDispatch();
  
  const onDeleteAll = (event) => {
    dispatch(deleteAll());
  };

  return (
    <div className="App">
      <h1> What is your main focus today?</h1>
      <AddTask />
      <TodoList />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={onDeleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

export default App;
