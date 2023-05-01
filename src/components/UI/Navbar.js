import React, { useContext } from "react";
import { ToDoContext } from "../../contexts/ToDoContext";
import useNavigatorOnLine from "./OnlineIndicator";

const Navbar = () => {
  const { todolist } = useContext(ToDoContext);
  const isOnline = useNavigatorOnLine();

  return (
    <div className="navbar">
      <div>
        <h1>Todo</h1>
        <p>Currently you have {todolist.length} Task remaining...</p>
      </div>
      <div>
        <p>UserName{isOnline ? "💚":"🖤"}</p>
      </div>
    </div>
  );
};

export default Navbar;
