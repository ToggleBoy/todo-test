import React, { useContext } from "react";
import { ToDoContext } from "../../contexts/ToDoContext";

const DisplayContentList = () => {
  const { storeCheckList } = useContext(ToDoContext);

  return (
    <>
      {storeCheckList.map((text) => (
        <p>{text}</p>
      ))}
    </>
  );
};

export default DisplayContentList;
