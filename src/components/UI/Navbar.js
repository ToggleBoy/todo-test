import React, { useContext } from "react";
import { ToDoContext } from "../../contexts/ToDoContext";

const Navbar = () => {
  const { todolist } = useContext(ToDoContext);
  return (
    <div className="navbar">
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <p>Currently you have {todolist.length} Task remaining...</p>
      </div>
    </div>
  );
};

export default Navbar;
