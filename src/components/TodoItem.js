import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTodo({
				id: id
			})
		)
	}

	return (
		<div>
			<div>
				{title}
			</div>
			<div>
				<button onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</div>
	);
};

export default TodoItem;