import React, { useContext, useState } from "react";
import style from "../Add-Todo/AddTodo.module.css";

import { ToDoContext } from "../../contexts/ToDoContext";
import Modal from "../UI/Modal";

const EditTodo = ({ onClose }) => {
  const { saveEdit, passEdit } = useContext(ToDoContext);
  const [title, setTitle] = useState(passEdit.map(todo => todo.title));

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (title !== "") {
      saveEdit(passEdit.map(todo => todo.id),title);
      onClose();
    }
    setTitle("");
  };

  return (
    <Modal onClick={onClose}>
      <div className={style.modal}>
        <div className={style.mainmodal}>
          <div className={style.row1}>
            <input
              type="button"
              value="⬅"
              onClick={handleSubmit}
              className={style.button}
            />
            <input
              type="button"
              value="🗑️"
              className={style.button}
              onClick={onClose}
            />
          </div>
          <div className={style.row2}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={style.text}
            />
          </div>
          <div className={style.row3}>
            <input type="button" value="🔗" className={style.button} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditTodo;

