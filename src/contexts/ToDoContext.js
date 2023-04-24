import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoContext = createContext();

const ToDOContextProvider = (props) => {
  const [todolist, setTodoList] = useState([]);
  const [passEdit, setpassEdit] = useState([]);

  const addTodo = (title) => {
    setTodoList([...todolist, { title, id: uuidv4() }]);
  };
  const removeTodo = (id) => {
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setpassEdit(todolist.filter((todo) => todo.id === id));
  };

  const saveEdit = (id, title) => {
    console.log(title)
    const updatedlist = todolist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title
        };
      }
      console.log(todo)
      return todo;
    });
    // console.log(updatedlist)
    // setTodoList(updatedlist);
  };


  return (
    <ToDoContext.Provider
      value={{ todolist, addTodo, removeTodo, editTodo, passEdit, saveEdit }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDOContextProvider;
