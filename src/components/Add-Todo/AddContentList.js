import React, { useContext, useState } from "react";
import style from "./AddTodo.module.css";
import { ToDoContext } from "../../contexts/ToDoContext";

const AddContentList = ({ closeCheckListInput }) => {
  const { storeCheckList, setStoreCheckList } = useContext(ToDoContext);
  const [textValue, setTextValue] = useState("");

  const changeStorelist = (event) => {
    setTextValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab" ) {
      setStoreCheckList([...storeCheckList, [textValue]]);
      setTextValue("");
      closeCheckListInput(true);
    }
  };

  return (
    <div className={style.list_section}>
      <input type="checkbox" placeholder="content" />
      <input
        type="text"
        placeholder="1.list"
        className={style.listbox_text}
        onKeyDown={handleKeyDown}
        onChange={changeStorelist}
        value={textValue}
      />
    </div>
  );
};

export default AddContentList;
