import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDoDetails = ({ todo, onOpen }) => {
  const { removeTodo, editTodo } = useContext(ToDoContext);

  const editOpenHandler = () => {
    editTodo(todo.id)
    onOpen()
  } 

  return (
    <li>
      <div onClick={editOpenHandler} className="title">
        {todo.title}
      </div>
      <div className="delete" onClick={() => removeTodo(todo.id)}>
        🗑️
      </div>
    </li>
  );
};

export default ToDoDetails;
