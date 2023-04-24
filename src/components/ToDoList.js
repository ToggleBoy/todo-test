import React, { useContext } from 'react';
import ToDoDetails from './ToDoShowDetails';
import { ToDoContext } from '../contexts/ToDoContext';

const ToDoList = ({ onShowEditModal }) => {
  const { todolist } = useContext(ToDoContext);

  return todolist.length ? (
    <div className="todo-list">
      <ul>
        {todolist.map(todo => {
          return ( <ToDoDetails onOpen={onShowEditModal} todo={todo} key={todo.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Todo 's </div>
  );
}

export default ToDoList;