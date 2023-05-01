import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoContext = createContext();

const ToDOContextProvider = (props) => {
  const [todolist, setTodoList] = useState([]);
  const [selectEdit, setselectEdit] = useState({ id: "" , title: ""});
  const [storeCheckList, setStoreCheckList] = useState([])

  const addTodo = (title) => {
    // used in addtodo
    // to add the todo to list
    setTodoList([...todolist, { title, subList: storeCheckList, id: uuidv4() }]);
    setStoreCheckList([])
  };
  const removeTodo = (id) => {
    // used in todoshowdetails
    // to remove the todo from the list
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    // to update the selectededit state 
    // filtering the todo object from todolist based on selected id in todoShowDetails 
    // after filtering the the todo it return an array so from that array we get 1st element
    const selectedObject = (todolist.filter((todo) => todo.id === id))[0]
    setselectEdit(selectedObject);
  };

  const saveEdit = (id, title) => {
    // used in edittodo 
    // this function is used when any changed in title or content is done 
    const updatedlist = todolist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title
        };
      }
      return todo;
    });
    setTodoList(updatedlist);
  };


  return (
    <ToDoContext.Provider
      value={{ todolist, addTodo, removeTodo, editTodo, selectEdit, saveEdit, storeCheckList, setStoreCheckList }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDOContextProvider;
