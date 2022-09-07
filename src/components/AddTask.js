import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/tasksSlice";

const AddTask = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) 
    {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      addTodo({
        task: value,
      })
    );

    setValue("");
  };

  return (
    <div>
      <input
				type="text"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button onClick={onSubmit}>
				Save
			</button>
    </div>
  );
};

export default AddTask;
